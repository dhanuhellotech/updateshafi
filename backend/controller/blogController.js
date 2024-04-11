const Blog = require('../model/Blog');
const multer = require('../middleware/upload');
const sharp = require("sharp");
const cloudinary = require("../middleware/cloudinary");

const uploadImage = multer.single('image');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const resizeImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(); // If no file uploaded, move to next middleware
    }

    const resizedImage = await sharp(req.file.buffer)
      .resize(300, 250)
      .toFormat("jpeg")
      .jpeg({ quality: 50 })
      .toBuffer();

    req.image = resizedImage.toString('base64');
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error resizing image" });
  }
};

const addImagetoCloud = async (req, res, next) => {
  try {
    if (!req.image) {
      return next(); // If no image resized, move to next middleware
    }

    const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${req.image}`, {
      folder: "blogImages" // Make sure the folder parameter is set to "blogImages"
    });

    if (!result || !result.public_id) {
      throw new Error("Invalid result object or missing public_id");
    }

    req.result = result;
    
    req.publicId = result.public_id; // Assign the public_id property to req.publicId
    next();
  } catch (err) {
    console.error('Error uploading image to cloud:', err);
    return res.status(500).json({ message: "Error uploading image to Cloudinary. Please try again later." });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, description, comments, date, year } = req.body;

    if ( !title || !description || !comments || !date || !year) {
      return res.status(400).json({ message: 'All fields are required for updating a blog' });
    }

    let updatedBlogData = {
    
      title,
      description,
      comments,
      date,
      year
    };

    if (req.result) {
      updatedBlogData.image = req.result.secure_url ? req.result.secure_url : undefined;
    }

    // You may want to handle image resizing and cloud uploading here as well if needed

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      updatedBlogData,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const createBlog = async (req, res) => {
  try {
    const { image, title, description, comments, date, year } = req.body;

    const newBlog = new Blog({
      image,
      title,
      description,
      comments,
      date,
      year,
      pid: req.result.public_id,
      image: req.result.secure_url,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  uploadImage,
  resizeImage,
  addImagetoCloud
};

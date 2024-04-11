const Review = require('../model/Review');
const multer = require('../middleware/upload');
const sharp = require("sharp");
const cloudinary = require("../middleware/cloudinary");

const uploadImage = multer.single('image');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
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
      folder: "reviews" // Make sure the folder parameter is set to "reviews"
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

const updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { image, content, name, place, stars } = req.body;

    if (!content || !name || !place || !stars) {
      return res.status(400).json({ message: 'All fields are required for updating a review' });
    }

    let updatedReviewData = {
      content,
      name,
      place,
      stars
    };

    if (req.result) {
      updatedReviewData.image = req.result.secure_url ? req.result.secure_url : undefined;
    }

    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      updatedReviewData,
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createReview = async (req, res) => {
  try {
    const { image, content, name, place, stars } = req.body;

    const newReview = new Review({
      image,
      content,
      name,
      place,
      stars,
      pid: req.result.public_id,
      image: req.result.secure_url,
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
  uploadImage,
  resizeImage,
  addImagetoCloud
};

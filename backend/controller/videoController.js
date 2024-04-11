// controllers/videoController.js
const Video = require('../model/Video');
const multer = require("multer");
const cloudinary = require("../middleware/cloudinary");
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "video-folder",
        allowed_formats: ["mp4"],
        resource_type: "video"
    }
});

const upload = multer({
    storage: storage
});

const uploadSingle = upload.single("video");


const CreateVideo = async (req, res) => {
  try {
      const { name, description, place, stars } = req.body;

      // Validate request body
      if (!name || !description || !place || !stars) {
          return res.status(400).json({ message: 'Missing required fields' });
      }

      let videoUrl;
      if (req.file) {
          // Access the file path from req.file
        videoUrl = req.file.path;
      } else {
          return res.status(400).json({ message: 'Video file is required' });
      }

      // Create a new video document
      const newVideo = new Video({
          name,
          description,
          videoUrl,
          place,
          stars
      });

      // Save the new video document to the database
      await newVideo.save();

      res.status(201).json({ message: 'Video created successfully', video: newVideo });
  } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};



const getAllVideos = async (req, res) => {
    try {
   
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const getVideoById = async (req, res) => {
    try {

        const { id } = req.params;

        const video = await Video.findById(id);
        
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.json(video);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateVideoById = async (req, res) => {
    try {
      const videoId = req.params.id;
  
      const { name, description, place, stars } = req.body;
  
      // Check if all required fields are present in the request body
      if (!name || !description || !place || !stars) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      // Optional: Check if videoUrl exists in req.file
  
      // Construct the updatedVideoData object
      let updatedVideoData = {
        name,
        description,
        place,
        stars
      };
  
      // Optionally, update videoUrl if a new file is uploaded
      if (req.file) {
        updatedVideoData.videoUrl = req.file.path;
      }
  
      // Find and update the video by ID
      const updatedVideo = await Video.findByIdAndUpdate(
        videoId,
        updatedVideoData,
        { new: true }
      );
  
      // Check if the video exists
      if (!updatedVideo) {
        return res.status(404).json({ message: 'Video not found' });
      }
  
      // Respond with success message and updated video
      res.json({ message: 'Video updated successfully', video: updatedVideo });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  
// Controller function to delete a specific video by ID
const deleteVideoById = async (req, res) => {
    try {
        // Extract video ID from request parameters
        const { id } = req.params;

        // Find the video with the specified ID and delete it
        const deletedVideo = await Video.findByIdAndDelete(id);

        // Check if the video exists
        if (!deletedVideo) {
            return res.status(404).json({ message: 'Video not found' });
        }

        // Respond with success message
        res.json({ message: 'Video deleted successfully' });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    uploadSingle,
    CreateVideo,
    getAllVideos,
    getVideoById,
    updateVideoById,
    deleteVideoById
};

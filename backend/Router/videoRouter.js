// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const videoController = require('../controller/videoController');

// Route to upload a single video
router.post('/upload', videoController.uploadSingle, videoController.CreateVideo);

// Routes for CRUD operations on videos
router.get('/', videoController.getAllVideos); 
router.get('/:id', videoController.getVideoById); 
router.post('/', videoController.CreateVideo); 
router.put('/:id',  videoController.uploadSingle,videoController.updateVideoById); 
router.delete('/:id', videoController.deleteVideoById); 
module.exports = router;











// const Video = require('../model/Video');
// const multer = require("multer")
// const cloudinary = require("../middleware/cloudinary")

// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const storage = new CloudinaryStorage({
//   cloudinary:cloudinary,
//   params:{
//     folder:"video-folder",
//     allowed_formats:["mp4"],
//     resource_type:"video"
//   }
// })

// const upload = multer({
//   storage:storage
// })

// const uploadSingle = upload.single("video")

// const CreateVideo = async (req, res) => {
//    res.json(req.file.path)
// };

// module.exports = {uploadSingle, CreateVideo };

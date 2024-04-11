const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController.js');

// Define routes
router.get('/', blogController.getAllBlogs);
router.post('/', blogController.uploadImage, blogController.resizeImage, blogController.addImagetoCloud, blogController.createBlog);
router.put('/:id', blogController.uploadImage, blogController.resizeImage, blogController.addImagetoCloud, blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);
router.post("/resize", blogController.uploadImage, blogController.resizeImage, blogController.addImagetoCloud, blogController.createBlog);

module.exports = router;

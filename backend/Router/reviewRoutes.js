const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController')

// Middleware for uploading and resizing images
const { uploadImage, resizeImage, addImagetoCloud } = reviewController;

// Route for getting all reviews
router.get('/', reviewController.getAllReviews);

// Route for creating a new review
router.post('/', uploadImage, resizeImage, addImagetoCloud, reviewController.createReview);

// Route for updating an existing review
router.put('/:id', uploadImage, resizeImage, addImagetoCloud, reviewController.updateReview);

// Route for deleting a review
router.delete('/:id', reviewController.deleteReview);
router.post("/resize", reviewController.uploadImage, reviewController.resizeImage, reviewController.addImagetoCloud, reviewController.createReview);


module.exports = router;

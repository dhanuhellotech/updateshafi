// models/Review.js

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  image: String,
  content: String,
  name: String,
  place: String,
  stars: Number,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

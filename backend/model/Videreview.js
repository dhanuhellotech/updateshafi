// models/Video.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    title: String,
    description: String,
    place: String,
    stars: Number,
    videoUrl: String // Storing the URL of the video in Cloudinary
});

module.exports = mongoose.model('Video', videoSchema);

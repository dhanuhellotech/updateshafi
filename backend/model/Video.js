// models/Video.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String, // This will store the URL of the uploaded video
        required: true
    },
    place: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Video', videoSchema);

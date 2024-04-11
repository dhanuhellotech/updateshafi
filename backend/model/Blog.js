const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [
        {
            type: String
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    year: {
        type: Number,
        default: new Date().getFullYear()
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

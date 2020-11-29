const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({

    blogImage:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;
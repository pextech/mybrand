const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({

   
    
    title:{
        type: String,
        
    },
    description:{
        type: String,
        
    },
blogImage:{
        type: String,

    }
    
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;
const checkAuth = require('../auth/checkAuth.js');
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');

const  mongoose  = require('mongoose');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const Blog = require('../modules/blogModule');

const blog_post = (req,res,next)=>{

    console.log(req.file);

    const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description : req.body.description
    });
    blog.save().then((result)=>{

        res.status(201).json({

            message:'successfully created blog',
            createdBlog:{

                title: result.title,
                description: result.description,
                id: result._id,
                request:{

                    type:'GET',
                    url:'http://localhost:3000/admin/blog/'+ result._id
                }
                
            }

        })

    }).catch((err)=>{res.status(500).json({error:err})})

}


module.exports = {
    
    blog_post
   
}
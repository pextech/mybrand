const checkAuth = require('../auth/checkAuth.js');
const jwt =  require('jsonwebtoken');
const Blog = require('../modules/blogModel');


const review_post = (req,res,next)=>{

    const contact = new Blog({

        blogImage:req.file.filename,
        title : req.body.title,
        description : req.body.description
    });
    contact.save().then((result)=>{

        res.status(201).json({
            message: 'sent successfuly'
        })
        console.log(result);

    }).catch(err=>{res.status(500).json({error:err})})


}


module.exports = {
    
    review_post,
   
}
const checkAuth = require('../auth/checkAuth.js');
const jwt =  require('jsonwebtoken');
const Blog = require('../modules/blogModel');
// const { set } = require('mongoose');


const review_post_update = (req,res,next)=>{

    const id = req.params.id;
   
   Blog.updateOne({_id: id},{ $set:{

            blogImage: req.file.filename,
            title: req.body.title,
            description: req.body.description
            
        
           
    }}).then(result=>{

   
       res.status(200).json({
           message:'updated blog',
           
       })
   })
   
    .catch(err=>{res.status(500).json({error:err})})


}


module.exports = {
    
    review_post_update,
   
}
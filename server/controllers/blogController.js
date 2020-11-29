const checkAuth = require('../auth/checkAuth.js');
const jwt =  require('jsonwebtoken');
const Blog = require('../modules/blogModel');


const review_post = (req,res,next)=>{

   Blog.find().sort({createdAt: -1})
   
    .then((result)=>{

        if(result.length > 0){

       

        const response ={
            count: result.length,
            products: result.map((doc)=>{
                return{
                     _id: doc._id,
                    blogImage:doc.blogImage,
                    title:doc.title,
                    description: doc.description,
                    createdAt: doc.createdAt,
                   
                    request:{
                     type:'GET',
                     url:'http://localhost:3000/admin/blog/'+ doc._id
                 }
                    
                }
            }) 
        }
    
    

        res.status(201).json(response);

    }
    else {
        res.status(201).json({
            
            message: 'no blogs found'
        });

    }



    }).catch(err=>{res.status(500).json({error:err})})


}


module.exports = {
    
    review_post,
   
}
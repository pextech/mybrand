const checkAuth = require('../auth/checkAuth.js');
const jwt =  require('jsonwebtoken');
const Blog = require('../modules/blogModel');


const review_post_delete = (req,res,next)=>{

    const id = req.params.id;
   Blog.findByIdAndDelete({_id: id}).then(result=>{
       res.status(200).json({
           message:'removed blog',
           blog: result
       })
   })
   
    .catch(err=>{res.status(500).json({error:err})})


}


module.exports = {
    
    review_post_delete,
   
}
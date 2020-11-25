

const Comment = require('../modules/commentModule');


const comment_post = (req,res,next)=>{

    const comment = new Comment({

        name : req.body.name,
        email : req.body.email,
        message : req.body.message

    });
    comment.save().then((result)=>{

        res.status(201).json({
            message: 'Commented successfuly'
        })
        console.log(result);

    }).catch(err=>{res.status(500).json({error:err})})


}


module.exports = {
    
    comment_post
   
}

const  mongoose  = require('mongoose');
const Contact = require('../modules/reviewModule');

const delete_review = (req,res,next)=>{

 id = req.params.id;

  Contact.findByIdAndDelete(id).then((result)=>{

    res.status(200).json({
        message: 'deleted Review'
    })
        

  })
  .catch((err)=>{res.status(500).json({error:err})})

}


module.exports = {
    
delete_review
   
}
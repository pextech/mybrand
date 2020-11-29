
const  mongoose  = require('mongoose');
const Contact = require('../modules/reviewModule');

const get_review = (req,res,next)=>{

  Contact.find().then((result)=>{

        const reviews = {

            count : result.length,
            contact : result.map((doc)=>{

                return { 
                id: doc._id,
                name: doc.name,
                email: doc.email,
                phone: doc.phone,
                message: doc.message,
                request:{

                    type:'GET',
                    url:'http://localhost:3000/admin/reviews/'+ doc._id
                }
            }
            })



        }

     res.status(200).json(reviews)
    

  })
  .catch((err)=>{res.status(500).json({error:err})})

}


module.exports = {
    
get_review
   
}
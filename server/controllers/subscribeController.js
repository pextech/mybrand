

const Contact = require('../modules/subscribeModule');


const subscribe_post = (req,res,next)=>{

    const contact = new Contact({

        
        email : req.body.email
        

    });
    contact.save().then((result)=>{

        res.status(201).json({
            message: 'Subscribed successfuly'
        })
        console.log(result);

    }).catch(err=>{res.status(500).json({error:err})})


}


module.exports = {
    
    subscribe_post
   
}
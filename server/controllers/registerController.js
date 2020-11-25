
const bcrypt = require('bcrypt');
const User = require('../modules/registerModule');


const userSignUp = (req,res,next)=>{

    User.find({email:req.body.email}).exec().then((user)=>{

        if(user.length >= 1){
            res.status(409).json({
                message:'user exits'
            })
        }
        else{
            bcrypt.hash(req.body.password,10,((err,hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }else{
             const user = new User({

    email: req.body.email,
    password :hash

   });

   user.save().then(result=>{
      
       res.status(201).json({
           message:'user created'
           
       });
       console.log(result);
   }).catch(err=>{res.status(500).json({error:err})})

        }
    }))
        }

    })

    
  

}


module.exports = {
    
    userSignUp
   
}
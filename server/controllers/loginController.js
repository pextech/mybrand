const checkAuth = require('../auth/checkAuth.js');
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');
const User = require('../modules/loginModule');


const userLogin = (req,res,next)=>{

    User.find({email : req.body.email}).exec().then((user)=>{

        if(user < 1){
            
         return    res.status(500).json({
                message: 'Auth failed'
            })
        }
        else{

            bcrypt.compare(req.body.password,user[0].password,(err,cred)=>{

                if(err){

                    res.status(500).json({
                        message:'Auth failed'
                    })

                }

                else {

                    const token = jwt.sign({

                        email: req.body.email,
                        userId: user[0]._id 

                    }
                    ,'secret'
                    ,{expiresIn:'1hr'}
                    );

                    return res.status(200).json({
                        message: 'user successfuly logged in',
                        token : token
                    })

                }

            })

        }

    })
    .catch(err=>{res.status(500).json({error:err})})

}


module.exports = {
    
    userLogin
   
}
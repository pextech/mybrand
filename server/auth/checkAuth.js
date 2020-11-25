const jwt = require('jsonwebtoken');


module.exports = (req,res,next)=>{


try{

    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token,'secret');
    req.userData = token;
    next();
    


}

catch{

    res.status(500).json({
        message : 'Auth failed'
    })

}

}
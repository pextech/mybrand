const express = require ('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,'./uploads');
    },
    filename: function(req,file,callback){
        callback(null, Date.now()+ file.originalname);
    }
});

const upload = multer({
    storage:storage,
    fileFilter: (req,file, callBack)=>{

        if(file.mimetype == "image/jpg" || file.mimetype == "image/png"){
            callBack(null,true)
        }
        else{
            callBack(null,false)
            console.log('only jpg and png')
        }

    },
    limits:{
        fileSize: 1024 * 1024 * 3
    }

});

const review = require('../controllers/blogController');

const checkAuth = require('../auth/checkAuth.js');



router.put('/:id',checkAuth,upload.single('blogImage'),review.review_post_update);





module.exports=router;
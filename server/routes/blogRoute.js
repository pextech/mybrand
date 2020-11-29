const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({

    destination: function (req,file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){
        cb(null, new Date().toISOString()+file.originalname);
    }

})

const fileFilter = (req,file,cb)=>{
    if(file.mimeType === 'image/jpeg' || file.mimeType === 'image/png'){

        cb(null,true);

    }
    else {
        cb(null,false);
    }
}

const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// const { product_update } = require('../controllers/productContoller');

const blog = require('../controllers/blogController');
const checkAuth = require ('../auth/check-auth');
const router = express.Router();



router.post('/',upload.single('blogImage'),blog.blog_post);




module.exports = router;
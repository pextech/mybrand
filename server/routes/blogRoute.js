const express = require ('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


const review = require('../controllers/blogController');

const checkAuth = require('../auth/checkAuth.js');


router.get('/',checkAuth,review.review_post);





module.exports=router;
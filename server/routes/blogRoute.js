const express = require ('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


const review = require('../controllers/blogController');

const checkAuth = require('../auth/checkAuth.js');


router.delete('/:id',checkAuth,review.review_post_delete);





module.exports=router;
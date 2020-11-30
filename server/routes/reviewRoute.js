const express = require('express');
const multer = require('multer');




const review = require('../controllers/reviewController');
const checkAuth = require ('../auth/checkAuth');
const router = express.Router();



router.delete('/:id',checkAuth,review.delete_review);




module.exports = router;
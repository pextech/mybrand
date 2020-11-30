const express = require ('express');
const router = express.Router();

const review = require('../controllers/contactController');



router.post('/',review.review_post);





module.exports=router;
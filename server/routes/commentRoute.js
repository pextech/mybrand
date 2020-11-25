const express = require ('express');
const router = express.Router();

const review = require('../controllers/commentController');



router.post('/',review.comment_post);





module.exports=router;
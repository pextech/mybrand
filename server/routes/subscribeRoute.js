const express = require ('express');
const router = express.Router();

const review = require('../controllers/subscribeController');



router.post('/',review.subscribe_post);





module.exports=router;
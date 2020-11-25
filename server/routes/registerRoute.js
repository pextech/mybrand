const express = require ('express');
const router = express.Router();

const review = require('../controllers/registerController');



router.post('/',review.userSignUp);





module.exports=router;
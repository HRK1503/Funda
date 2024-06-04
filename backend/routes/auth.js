const { createuser, userlogin } = require('../controllers/users');

const router=require('express').Router();


router.post('/createuser',createuser)
router.post('/userlogin',userlogin)



module.exports=router
const { createuser, userlogin } = require('../controllers/users');

const router=require('express').Router();

router.post('/createuser',createuser)
        .post('/userlogin',userlogin)


module.exports=router
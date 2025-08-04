const express=require('express');
const { login, register, authUser, getUserData } = require('../controller/userController');
const { IsLoggedIn } = require('../middleware/IsLoggedIn');
const router=express.Router();
router.post("/login",login);
router.post("/signup",register);
router.get("/auth",IsLoggedIn,authUser);
router.get("/getuserdata",IsLoggedIn,getUserData);
module.exports=router;
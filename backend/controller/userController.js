const jwt=require('jsonwebtoken');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const userModel=require('../models/user');
const router = require('../routes/user');
const user = require('../models/user');
const generateToken=async function(email,id)
{
   return jwt.sign({email,id},process.env.JWT_SECRET);
}
//API for user registration
module.exports.register=async(req,res)=>
{
    try {
        console.log(req.body);
       const {name,email,password}=req.body; 
       if(!validator.isEmail(email))
        return res.json({success:false,message:"please enter a valid email"});
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt); 
       const user=new userModel({
        name:name,
        email:email,
        password:hashedPassword,
        referral:email+"2004"
       });
       await user.save();
        const token=await generateToken(email,user._id);
       res.json({success:true,message:"user created successfully",user:user,token:token});
    } catch (error) {
        res.json({success:false,error:error.message});
    } 
}
//API for user login
module.exports.login=async(req,res)=>
{
      try {
            const {email,password}=req.body;  
            if(!validator.isEmail(email))
                 return res.json({success:false,message:"please enter a valid email"});
            const decodeduser=await userModel.findOne({email:email});
            if(!decodeduser)
                {
                    return res.json({success:false,message:"matching user or password not found"}); 
                } 
            const match=await bcrypt.compare(password,decodeduser.password);
            if(!match)
                 return res.json({success:false,message:"matching user or password not found"}); 
            const token=await generateToken(email,decodeduser._id);
            
            res.json({success:true,message:"logged in successfully",user:decodeduser,token:token});
        } catch (error) {
            res.json({success:false,error:error.message});
        }
}
//API for authenticating user
module.exports.authUser=(req,res)=>
{
try {
 res.json({success:true,user:req.user});
} catch (error) {
    return res.json({success:false,message:error.message});
}
}
module.exports.getUserData=async(req,res)=>
{
    try {
        const userData=await user.findOne({_id:req.user._id});
        const users=await user.find({});
        let totalfund=0;
        users.map((user)=>
        {
         totalfund=totalfund+(Number)(user.donation);
        })
        res.json({success:true,totalFund:totalfund,userData:userData});
    } catch (error) {
      res.json({success:false,error:error.message});   
    }
}
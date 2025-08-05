const express=require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');
const db=require('./config/db');
const user=require('./routes/user');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/api/user",user);
app.get("/api",(req,res)=>{
    res.send("Backend API is working");
})
module.exports=app;
// const PORT=3000;
// app.listen(PORT,()=>{
//     console.log(`app start running on http://localhost:${PORT}`);
// })
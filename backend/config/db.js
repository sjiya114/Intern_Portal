const mongoose=require('mongoose');
module.exports.connectDB=mongoose.connect(process.env.MONGODB_URL).then(()=>{
console.log("connected to db successfully");
})
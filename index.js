
 //data send into mongodb  code from the front end react js
 import  express, { application }  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
 import cors from 'cors'

mongoose.connect('mongodb://127.0.0.1:27017/consumers',// database connection
function(err) {
   
 if(err) {
 console.log('error in this')
 console.log(err);
 // Do whatever to handle the error
 } else {
 console.log('Connected to the database');
 }
 }); 
  // create a schemaa
 const userSchema=new mongoose.Schema({
   name:String,
  
   email:{type:String,uniqe:true},
   password:String,
   phone:String,

 });

const User=mongoose.model('User',userSchema);
// server created
 const server=express();
 
 server.use(cors());
 server.use(bodyParser.json());

 
 server.post('/demo',async(req,res)=>{

    let user=new User()
    user.name=req.body.name;
    user.email=req.body.email;
    user.address=req.body.address;
    user.password=req.body.password;
    user.phone=req.body.phone;

   const doc=await user.save();
   console.log(doc)
   res.json(doc);
 })
 server.post('/demo',async(req,res)=>{

  let user=new User()
  
  user.email=req.body.email;
  user.password=req.body.password;
 const doc=await user.save();
 console.log(doc)
 res.json(doc);
})

 server.listen(8080,()=>{
  console.log('server start')
})



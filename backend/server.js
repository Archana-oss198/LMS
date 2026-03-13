require("dotenv").config();
const express=require("express");
const mongoose = require("mongoose");
    const app=express();
   const connect=async ()=>{
       try {
           await mongoose.connect(process.env.MONGODB_URL);
           console.log("mongo db connected successfully");
           
       } catch (error) {
           console.log("Error in connecting monogdb"+error);
           
       }
   }
   connect();
    app.listen("3000",()=>{
        console.log("app listening on port 3000");
    })
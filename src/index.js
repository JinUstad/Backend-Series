// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
// import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectToDB from "./bd/index.js";

connectToDB()
.then(()=>{
    console.log(process.env.PORT || 8000 , ()=>{
        console.log(`server is running on port 8000 
        ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongo db connection error",error)
    process.exit(1)
})



dotenv.config({ path: "./env" });









/*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log("database connected")

        app.on("error", (error) => {
            console.log(error)
        })
        app.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`)
        })
        throw error
    } catch (error) {
        console.log(error)
        throw error
    }
})()*/

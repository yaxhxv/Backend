// require("dotenv").config({path: "./env"})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"

const app = express();

// debugg - backend 7 33:00
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,() =>{
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("connection failed" , err);
})








/*
const app = express();


(async() =>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", (e) =>{
        console.log("ERROR" , e);
       })

       app.listen(process.env.PORT, ()=>{
        console.log(`listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("ERROR", error)
    }
})()
*/
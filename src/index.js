// require("dotenv").config({path: "./env"})
import dotenv from "dotenv"

import connectDB from "./db/index.js";
 


connectDB();
// debugg - backend 7 33:00







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
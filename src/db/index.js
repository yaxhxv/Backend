import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv"

const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log(`\n "DB connection successfull" ${connectionInstance.connection.host}`);
    } catch (error) {
      console.log("Error occurred", error);
      process.exit(1);
    }
  };
  


export default connectDB
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

// Database Connection 
// as Database is in other place always use async and await and wrap in try and catch
const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        });
        console.log(`MongoDB connected !!!, DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default ConnectDB;
 
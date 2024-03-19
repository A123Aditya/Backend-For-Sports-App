// require('dotenv').config({path: './env'})
// // import dotenv from "dotenv"
import dotenv from 'dotenv';
import ConnectDB from "./db/db.js";
import { app } from './app.js';

dotenv.config({ path: './.env' });

//then is a type of promise  in javascript
ConnectDB().then(()=>{
    try {
        app.listen(process.env.PORT || 8000 ,()=>{
            console.log(`Server is Running at port ${process.env.PORT}`) 
        })
    } catch (error) {
        console.log(`Error in connecting Server !!! ${error}`);
    }
}).catch((err)=>{
    console.log(`Error in Connecting MongoDB ${err}`);
});
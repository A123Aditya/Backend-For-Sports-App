import express from "express";
import cors from "cors";
import { DATA_LIMIT } from "./constants.js";
import cookieParser from "cookie-parser";
const app = express();




// cors have variety of options like origin etc

// app.use() is used for configiration
app.use(cors());

// app.use() is used for configiration
app.use(express.json({limit: `${DATA_LIMIT}`}));

// app.use() is used for configiration
app.use(express.urlencoded({limit:`${DATA_LIMIT}`}));

// app.use() is used for configiration 
// for cookieParser
app.use(cookieParser());
export {app};
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import {MongoConnect} from "./Database.js"
import { DashRouter } from "./routes/Dashboard.js";
import { loginUser } from "./routes/Signin.js";
import { signupUser } from "./routes/Register.js";
import { LogoutRouter } from "./routes/SignOff.js";





//dotenv configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT

MongoConnect();

//middleWare:
app.use(cors());
app.use(express.json());

//routes
app.use("/",DashRouter); 
app.use("/login",loginUser);
app.use("/signup",signupUser); 
app.use("/logout", LogoutRouter);
//listening
app.listen(PORT, ()=>console.log(`Your Server will be lisenting on port http://localhost:${PORT}`)); 
import express from "express";
import cors from "cors";
import userRouter from "./Routes/user.route.js";
import db from "./db/db.js";
import { ensureAuth, refreshTokensMiddleware } from "./Middleware/auth.middleware.js";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import { homePage } from "./Controller/user.controller.js";
const app = express();
db()


app.use(cors({
  origin: `${process.env.FRONTEND_URL}` ,
  credentials:true
}));


//Middlewares
app.use(cookieParser())
app.use(refreshTokensMiddleware)
app.use(express.json())
app.use('/user',userRouter)

export default app;

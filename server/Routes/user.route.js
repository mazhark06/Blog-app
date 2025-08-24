import express from "express";
import { userSignup } from "../Controller/user.controller.js";
const userRouter = express.Router()

userRouter.post('/signup' , userSignup)


export default userRouter
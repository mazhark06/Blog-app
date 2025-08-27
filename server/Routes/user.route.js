import express from "express";
import { loginSkipper, userSignup,userLogin, homePage } from "../Controller/user.controller.js";
import { ensureAuth, refreshTokensMiddleware } from "../Middleware/auth.middleware.js";
const userRouter = express.Router()

userRouter.post('/signup' , userSignup)
userRouter.post('/login',userLogin)
userRouter.get('/auth' ,loginSkipper)
userRouter.get('/api',ensureAuth,homePage)


export default userRouter
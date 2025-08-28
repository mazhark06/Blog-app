import express from "express";
import {
  loginSkipper,
  userSignup,
  userLogin,
  homePage,
  verifyEmail,
  resendOTP,
} from "../Controller/user.controller.js";
import { ensureAuth } from "../Middleware/auth.middleware.js";
const userRouter = express.Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.post("/verify-email/:email/:OTP", verifyEmail);
userRouter.post("/resend-OTP/:email", resendOTP);

// Protected Route
userRouter.get("/auth", loginSkipper); //Login Page Skip Route
userRouter.get("/api", ensureAuth, homePage); // User authenticated filter

export default userRouter;

import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import Apiresponse from "../utils/ApiResponse.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken.js";

const userSignup = async function (req, res) {
  try {
    let { username, email, password } = req.body;

    if (!username || !password || !email)
      return res
        .status(400)
        .json(
          new Apiresponse(false, true, "All fields are required", req.body.data)
        );

    //Validation of user if He/She already exists
    let ExistingUsername = await User.findOne({ username: username }).select(
      " -password -OTP "
    );

    if (ExistingUsername)
      return res
        .status(401)
        .json(
          new Apiresponse(
            false,
            true,
            `Username Already Exist please enter unqiue username`
          )
        );

    let ExistingEmail = await User.findOne({ email: email });

    if (ExistingEmail)
      return res
        .status(401)
        .json(
          new Apiresponse(false, true, `Email Already Exist`, ExistingEmail)
        );

    // Submitting User
    let submitUser = await User.insertOne({
      username: username,
      password: password,
      email: email,
    });

    let accessToken = await generateAccessToken(submitUser);
    let refeshToken = await generateRefreshToken(submitUser);

    res
      .cookie("refreshToken", refeshToken, {
        secure: false, // true if using HTTPS
        maxAge: 24 * 7 * 60 * 60 * 1000,
        httpOnly: true, // for security, set to true
        sameSite: "Strict", // or 'Strict' if using HTTPS and cross-origin
      })
      .cookie("accessToken", accessToken, {
        secure: false, // true if using HTTPS
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true, // for security, set to true
        sameSite: "Strict", // or 'Strict' if using HTTPS and cross-origin
      })
      .status(200)
      .json(
        new Apiresponse(true, false, "user created successfully")
      );
  } catch (error) {
    console.log("ERROR : SIGNUP ROUTE ", error);
    res
      .status(500)
      .json(new Apiresponse(false, true, "INTERNAL SERVER ERROR", error));
  }
};

const userLogin = async function (req, res) {
  try {
    let { username, password } = req.body;
    if (!username || !password)
      return res
        .status(404)
        .json(new Apiresponse(false, true, "All fields are required"));

    const ExistingUser = await User.findOne({
      username: username,
    });
    if (!ExistingUser)
      return res
        .status(402)
        .json(new Apiresponse(false, true, "User not Found"));

    let isValidPassword = await ExistingUser.comparePassword(password);
    if (!isValidPassword)
      return res
        .status(402)
        .json(new Apiresponse(false, true, "Incorrect Password"));


let refreshToken = await generateRefreshToken(ExistingUser)
let accessToken =await generateAccessToken(ExistingUser)

    res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        secure: false, // true if using HTTPS
        maxAge: 24 * 7 * 60 * 60 * 1000,
        httpOnly: true, // for security, set to true
        sameSite: "Strict", // or 'Strict' if using HTTPS and cross-origin
      })
      .cookie("accessToken", accessToken, {
        secure: false, // true if using HTTPS
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true, // for security, set to true
        sameSite: "Strict", // or 'Strict' if using HTTPS and cross-origin
      })
      .json(
        new Apiresponse(true, false, "user Logged in successfully")
      );
  } catch (error) {
    console.log("ERROR : USER LOGIN ", error);
    res
      .status(500)
      .json(new Apiresponse(false, true, "Internal server error.."));
  }
};

const loginSkipper = async (req, res) => {
  try {
    let _id = req.user;

    if (!_id) return res.status(200);
    if (req.accessToken) {
      
      return res
        .status(200)
        .cookie("accessToken", req.accessToken, {
          secure: false, // true if using HTTPS
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true, // for security, set to true
          sameSite: "Strict",
        })
        .json(new Apiresponse(true, false, "User Authenticated"));
    }


   return res
        .status(200)
        .json(new Apiresponse(true, false, "User Authenticated"));



  } catch (error) {
    console.log("ERROR : LOGIN SKIPPER ", error);
    res
      .status(500)
      .json(new Apiresponse(false, true, "Internal server error.."));
  }
};

const homePage = async (req,res) => {
  
  let usersData = await User.findById(req.user)

  res.status(200).json({usersData})
  
}
export { userSignup, userLogin, loginSkipper ,homePage};

import jwt from "jsonwebtoken";
import Apiresponse from "./ApiResponse.js";

let generateRefreshToken = async (User) => {
  try {
    let token = await jwt.sign(
      {
        email:User.email,
        username: User.username,
        _id: User._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: 7 * 24 * 60 * 60 *1000,
      }
    );
    return token;
  } catch (error) {
    console.log("ERROR : IN GENERATE TOKEN", error);
    return null
  }
};

let generateAccessToken = async (User) => {
  try {
    let token = await jwt.sign(
      { email: User.email,
        _id:User._id
       },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: 24 * 60 * 60 *1000,
      }
    );
    return token;
  } catch (error) {
    console.log("ERROR : IN GENERATE TOKEN", error);
    return null
  }
};
let verifyRefreshToken = async (token) => {
  try {
    let validToken = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    return validToken
  } catch (error) {
    console.log("ERROR : IN VERIFY REFRESH TOKEN", error);
    return null
  }
};
let verifyAccessToken = async (token) => {
  
  try {
    
    let validToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return validToken

  } catch (error) {
    console.log("ERROR : IN VERIFY ACCESS TOKEN", error);
    return null
  }

};
export {
  generateRefreshToken,
  generateAccessToken,
  verifyAccessToken,
  verifyRefreshToken,
};

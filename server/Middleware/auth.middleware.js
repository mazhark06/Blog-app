/**
 * @param {import('express').Request}as req
 * @param {import('express').Response}as res
 * @param {import('express').NextFunction}as next
 */
import { User } from "../models/user.model.js";
import Apiresponse from "../utils/ApiResponse.js";
import {
  generateAccessToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/generateToken.js";

const refreshTokensMiddleware = async (req, res, next) => {
  let refeshTokenDecoded;

  try {
    let accessToken = req.cookies.accessToken;

    if (!accessToken) {
      let refreshToken = req.cookies.refreshToken;

      if (!refreshToken) return next();

      refeshTokenDecoded = await verifyRefreshToken(refreshToken);


      let accessToken = await generateAccessToken(refeshTokenDecoded);

      req.accessToken = accessToken;
      req.user = refeshTokenDecoded._id;

      next();
    }

    let decoded = await verifyAccessToken(accessToken);

    req.user = decoded._id;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

const ensureAuth = async (req, res, next) => {
  try {
    if (!req.user) return res
        .status(401)
        .json(new Apiresponse(false, true, "User not Authorized"));

    next();
  } catch (error) {
    console.log("ERROR : HOME PAGE ", error);
    res
      .status(500)
      .json(new Apiresponse(false, true, "Internal server error.."));
  }
};

export { refreshTokensMiddleware, ensureAuth };

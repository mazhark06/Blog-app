import { User } from "../models/user.model.js"
import crypto from 'node:crypto'

let generateOTP = async (userId) => {
     
    let min = 100000
    let max = 999999
    
    let OTP = await crypto.randomInt(min,max)
    let expireAt = new Date(Date.now() + 10 * 60 * 1000)
   await User.findByIdAndUpdate(userId._id,{
    OTP:OTP,
    otp_expireAt:expireAt
   })
   return OTP

}
export default generateOTP
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    email_Verified : {
        type :Boolean,
        default:false,
    },
    OTP:{
        type : Number,
        expires:5*60*1000,
    },
    otp_expireAt:{
      type:Date,
    },
    password: {
      type: String,
      required: true,
      select : false
    },
    avatar: {
      type: String,
      select:false
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      select:false
    },
    Age: {
      type: Number,
      select:false
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next){
  if(!this.isModified('password')) return next()
  try {
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next()
  } catch (error) {
    console.log("ERROR : HASHING PASSWORD" ,error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    
    let isValidPassword = await bcrypt.compare(password, this.password);
    return isValidPassword;

  } catch (error) {
    console.log("ERROR : COMPARING PASSWORD" ,error);
    next(error)

  }
};

export const User = mongoose.model("User", userSchema);



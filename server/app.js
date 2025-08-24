import express from "express";
import cors from "cors";
import userRouter from "./Routes/user.route.js";
const app = express();


//Middlewares
app.use(cors());
app.use(express.json())
app.use('/user',userRouter)


app.get("/", (req, res) => {
  res
  .json({message:"Hello" ,})
});

export default app;

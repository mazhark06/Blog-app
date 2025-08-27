import mongoose from "mongoose";

let  db = async  () => {
   try {
    await mongoose.connect(`${process.env.DATABSE_URL}`)
   } catch (error) {
    console.log('Error on DB connection' , error);
    process.exit(1)
    
   }
}
export default db
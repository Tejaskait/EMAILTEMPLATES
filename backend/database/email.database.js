import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
function mongo_function(){
    mongoose
   .connect(process.env.MONGO)
   }
export default mongo_function;
  
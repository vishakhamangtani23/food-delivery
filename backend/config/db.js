import mongoose from "mongoose";

export const connectDB = async () =>{
  await mongoose.connect('mongodb+srv://vishakha:vishakha@cluster0.tk0fgbw.mongodb.net/food-del').then(
    ()=>{
      console.log("DB connected")
    }
  )
}
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:0987poiu@cluster0.47oruas.mongodb.net/Food-del').then (()=>console.log("DB Connected"));
}
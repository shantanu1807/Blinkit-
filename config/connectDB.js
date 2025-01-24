import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config() 

if(!process.env.MONGODB_URI){
    throw new Error(
        "Please provide MONGODB_URI in the .env file"
    )
}

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect DB")
    } catch(error){
        console.log("Mongodb connect error", error)
        process.exist(1) // stop the server
    }
}

export default connectDB
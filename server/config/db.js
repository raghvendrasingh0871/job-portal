import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect();
    }
    catch(error){
        console.log("found error while connecting");
    }
}
import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
    }
    catch(error){
        console.log("found error while connecting");
    }
}
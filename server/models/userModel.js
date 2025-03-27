import mongoose from "mongoose";
import validator from "validator";
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"]
    },
    email:{
        type: String,
        required: [true, "email is required"],
        unique: true,
        validate: validator.isEmail
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    location:{
        type: String,
        default: "India"
    }
},{timestamp:true});
export default mongoose.model('User', userSchema);
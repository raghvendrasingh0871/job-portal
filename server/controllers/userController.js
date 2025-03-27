import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

export const updateUserController = async (req,res) => {
    try{
        const {name, password, location} = req.body;
        const userDetails = req.user;
        const user = await userModel.findOne({email:userDetails.email});
        user.name=name;
        user.password = await bcrypt.hash(password,10);
        user.location=location;
        user.save();
        const token = await jwt.sign({email:userDetails.email},process.env.JWT_SECRET,{ expiresIn: "1d" });
        res.status(200).send({success:true,message:"updated"});
    }
    catch(error){
        res.status(500).send({success:true,message:"something went wrong"});
    }
}
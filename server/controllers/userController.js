import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const updateUserController = async (req,res,next) => {
    const {name, password, location} = req.body;
    const userDetails = req.user;
    const user = await userModel.findOne({email:userDetails.email});
    user.name=name;
    user.password = await bcrypt.hash(password,10);
    user.location=location;
    user.save();
    const token = await jwt.sign({email:userDetails.email, password});
    res.status(200).send({success:true,message:"logged in"});
}
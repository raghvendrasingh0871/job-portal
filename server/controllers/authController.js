import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const registerController = async (req,res) => {
    try{
        const {name,email,password}=req.body;
        if(!name){
            return res.status(400).send({success:false,message:"name is requires"});
        }
        if(!email){
            return res.status(400).send({success:false,message:"email is requires"});
        }
        if(!password){
            return res.status(400).send({success:false,message:"password is requires"});
        }
        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            return res.status(200).send({success:false,message:"already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await userModel.create({name,email,password: hashedPassword});
        return res.status(201).send({success:true,message:"successfully registered"});
    }
    catch(error){
        return res.status(400).send({message:"error in register controller"});
    }
}
export const loginController = async (req,res) => {
    try{
        const {email, password} =req.body;
        if(!email || !password){
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({ success: false, message: "wrong credentials" });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            next("wrong credentials");
        }
        const token = jwt.sign({email:user.email},process.env.JWT_SECRET,{ expiresIn: "1d" });
        res.status(200).json({user,token});
    }
    catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ success: false, message: "error in login" , error});
    }
}
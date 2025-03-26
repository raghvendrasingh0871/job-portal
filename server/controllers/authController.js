import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
        const user = await userModel.create({name,email,hashedPassword});
        return res.status(201).send({success:true,message:"successfully registered"});
    }
    catch(error){
        return res.status(400).send({message:"error in register controller"});
    }
}
export const loginController = async (req,res) => {
    const {email,password} =req.body;
    if(!email || !password){
        next("email && password both are required")
    }
    const user = await userModel.find({email});
    if(!user){
        next("wrong credentials");
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        next("wrong credentials");
    }
    const token = await jwt.sign({email, password});
    res.status(200).send({success:true,message:"logged in"});
}
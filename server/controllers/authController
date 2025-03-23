import userModel from "../models/userModel.js";

export const registerController = async (req,res) => {
    try{
        const {name,email,password}=req.body;
        if(!name){
            return res.status(400).send({success:false,message:"name is requires"})
        }
        if(!email){
            return res.status(400).send({success:false,message:"email is requires"})
        }
        if(!password){
            return res.status(400).send({success:false,message:"password is requires"})
        }
        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            return res.status(200).send({success:false,message:"already exists"})
        }
        const user = await userModel.create({name,email,password}) 
        return res.status(201).send({success:true,message:"successfully registered"})
    }
    catch(error){
        return res.status(400).send({message:"error in register controller"})
    }
}
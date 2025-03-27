import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userAuth = async (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        next("Auth Failed");
    }
    
    try{
        const token = authHeader.split(' ')[1];
        const verified = jwt.verify(token,process.env.JWT_SECRET);
        req.user = verified;
        next();
    }
    catch(error){
        res.status(403).json({ error: "Invalid Token" });
    }
}
export default userAuth;
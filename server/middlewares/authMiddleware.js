import jwt from "jsonwebtoken";
const userAuth = async (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        next("Auth Failed");
    }
    const token = authHeader.split(' ')[1];
    try{
        const verified = jwt.verify(token);
        req.user = verified;
        next();
    }
    catch(error){
        res.status(403).json({ error: "Invalid Token" });
    }
}
export default userAuth;
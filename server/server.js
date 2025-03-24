import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
// dotenv configuration
dotenv.config();
// mongodb connection
connectDB();

const app=express();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth",authRoutes);
const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Hello");
})
app.listen(PORT,()=>{

});
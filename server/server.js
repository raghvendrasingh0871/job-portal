import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
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
app.use("/api/user",userRoutes);
app.use("/api/jobs",jobRoutes);

const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Hello");
})
app.listen(PORT,()=>{

});
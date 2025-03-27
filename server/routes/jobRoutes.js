import express from "express";
import {createJobController, getJobsController} from "../controllers/jobController.js";
import userAuth from "../middlewares/authMiddleware.js";
const router = express.Router();
router.post("/create-job", userAuth, createJobController);
router.get("/get-job", userAuth, getJobsController);
export default router;
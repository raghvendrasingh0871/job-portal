import express from "express";
import { updateUserController } from "../controllers/userController.js";
const rouuter = express.Router();
router.put('/update-user',updateUserController);
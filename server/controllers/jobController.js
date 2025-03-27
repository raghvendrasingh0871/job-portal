import jobModel from "../models/jobModel.js";

export const createJobController = async (req, res, next) => {
    const {company, role, type, requirement, location} = req.body;
    if(!company || !role || !type || !requirement || !location){
        next("Please provide all fields")
    }
    const job = await jobModel.create({company, role, type, requirement, location});
    res.status(200).json({job});
}
export const getJobsController = async (req, res, next) => {
    const job = await jobModel.find();
    res.status(200).json({job});
}
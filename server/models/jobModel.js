import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    requirement:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    }
},{timestamp: true});
export default mongoose.model('Job', jobSchema);
import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({});

const Assignment = mongoose.model("Assignment", AssignmentSchema);
export default Assignment;

import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({

});

const Department = mongoose.model("Department", DepartmentSchema);
export default Department;
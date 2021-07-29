import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({

});

const Course = mongoose.model("Course", CourseSchema);
export default Course;
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: [true, "Please provide the course title"],
    },
    courseCode: {
        type: String,
        required: [true, "Please provide the course code"],
    },
    courseTeacher:{
        type: String,
        required: [true, "Please provide teacher id"]
    },
    courseTeacher:{
        type: Array,
        required: [true, "Please provide students id(s)"]
    },
    department: {
        type: String,
        required: [true, "Please provide the department name"],
    }
});

const Course = mongoose.model("Course", CourseSchema);
export default Course;
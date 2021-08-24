import mongoose from "mongoose";

// MongoDB data type ObjectId
const ObjectId = mongoose.Schema.Types.ObjectId;

const CourseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: [true, "Please provide the course title"],
    },
    courseCode: {
        type: String,
        unique: [true],
        required: [true, "Please provide the course code"],
    },
    courseTeacher: {
        type: ObjectId,
        ref: "Teacher",
        required: [true, "Please provide the student ID"],
    },
    courseStudents: [
        {
            type: ObjectId,
            ref: "Student",
            required: [true, "Please provide students' id(s)"],
        },
    ],
    department: {
        type: String,
        required: [true, "Please provide the department name"],
    },
});

const Course = mongoose.model("Course", CourseSchema);
export default Course;

/*
 * Title: Model of the Result object in Edu Burg ERP
 * Description: Defines the structure of result object to be saved in the DB
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
import mongoose from "mongoose";

// MongoDB data type ObjectId
const ObjectId = mongoose.Schema.Types.ObjectId;

// Schema for Semester Result of students
const ResultSchema = new mongoose.Schema({
    studentId: {
        type: ObjectId,
        ref: "Student",
        required: [true, "Please provide the student ID"],
    },
    cgpa: {
        type: String,
        required: [true, "Please provide the CGPA"],
    },
    semester: {
        type: String,
        required: [true, "Please provide the semester"],
    },
    comment: {
        type: String,
        required: [true, "Please provide the comment"],
    },
    imageURL: {
        type: String,
        required: [true, "Picture is required"],
    },
});

// Result Model
const Result = mongoose.model("Result", ResultSchema);

export default Result;

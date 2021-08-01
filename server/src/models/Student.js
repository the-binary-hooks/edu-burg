import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// MongoDB data type ObjectId
const ObjectId = mongoose.Schema.Types.ObjectId;

// Schema for Students
const StudentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Id is required"],
        unique: true,
    },
    studentName: {
        type: String,
        required: [true, "Please provide the student name"],
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email.",
        ],
        unique: true,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        select: false,
        required: [true, "Password is required"],
    },
    phone: {
        type: Number,
        match: [
            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
            "Please provide a valid phone number.",
        ],
        unique: true,
        required: [true, "Phone is required"],
    },
    bio: {
        type: String,
    },
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"],
    },
    semester: {
        type: String,
        required: [true, "Semester is required"],
    },
    session: {
        type: String,
        required: [true, "Session is required"],
    },
    program: {
        type: String,
        required: [true, "Program is required"],
    },
    FathersName: {
        type: String,
        required: [true, "Father's name is required"],
    },
    MothersName: {
        type: String,
        required: [true, "Mother's name is required"],
    },
    FathersMobileNumber: {
        type: Number,
        required: [true, "Father's mobile number is required"],
    },
    dateOfBirth: {
        type: Date,
        // required: [true, "Date of birth is required"],
        default: Date.now(),
    },
    permanentAddress: {
        type: String,
        required: [true, "Permanent address is required"],
    },
    presentAddress: {
        type: String,
        required: [true, "Present address is required"],
    },
    semesterResults: [
        {
            studentId: { type: ObjectId },
            cgpa: { type: Number },
            resultImage: { type: String },
            comment: { type: String },
        },
    ],
    payments: [{ type: String }],
    assignments: [{ type: String }],
    sscOLevelDakhilInfo: {
        type: {
            board: String,
            rollNo: String,
            registrationNo: String,
            passingYear: String,
            GPA: Number,
        },
        required: [true, "SSC/O-Level/Dakhil information is required"],
    },
    hscALevelAlimDiplomaInfo: {
        type: {
            board: String,
            rollNo: String,
            registrationNo: String,
            passingYear: String,
            GPA: Number,
        },
        required: [true, "HSC/A-Level/Alim/Diploma information is required"],
    },
    courses: [
        {
            type: ObjectId,
            ref: "Course",
        },
    ],
    followers: [
        {
            type: ObjectId,
            ref: "Student" | "Teacher" | "Admin",
        },
    ],
    following: [
        {
            type: ObjectId,
            ref: "Student" | "Teacher" | "Admin",
        },
    ],
    posts: [
        {
            type: ObjectId,
            ref: "Post",
        },
    ],
    comments: [
        {
            type: ObjectId,
            ref: "Comment",
        },
    ],
    chats: [
        {
            type: ObjectId,
            ref: "Chat",
        },
    ],
    department: {
        type: ObjectId,
        ref: "Department",
        default: "CSE",
    },
    gender: {
        type: String,
        enum: ["female", "male"],
    },
    picture: {
        type: String,
        required: [true, "Picture is required"],
    },
});

// Save password
StudentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Get Token
StudentSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Student Model
const Student = mongoose.model("Student", StudentSchema);
export default Student;

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// MongoDB data type ObjectId
const ObjectId = mongoose.Schema.Types.ObjectId;

// Schema for Teachers
const TeacherSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Id is required"],
        unique: true,
    },
    teacherName: {
        type: String,
        required: [true, "Please provide the teacher name"],
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
    rating: {
        type: Number,
        default: 0.0,
    },
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"],
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
            ref: "Teacher" | "Student" | "Admin",
        },
    ],
    following: [
        {
            type: ObjectId,
            ref: "Teacher" | "Student" | "Admin",
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
TeacherSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Get Token
TeacherSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Teacher Model
const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;

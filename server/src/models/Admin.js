/*
 * Title: Model of the Teacher object in Edu Burg ERP
 * Description: Defines the structure of teacher object to be saved in the DB
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// MongoDB data type ObjectId
const ObjectId = mongoose.Schema.Types.ObjectId;

// Schema for Administrator users
const AdminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Id is required"],
        unique: true,
    },
    adminName: {
        type: String,
        required: [true, "Please provide the admin name"],
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
    gender: {
        type: String,
        enum: ["female", "male"],
        required: [true, "Picture is required"],
    },
    picture: {
        type: String,
        required: [true, "Picture is required"],
    },
});

// Save password
AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Get Token
AdminSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Admin Model
const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;

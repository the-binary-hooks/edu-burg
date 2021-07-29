import crypto from "crypto";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const TeacherSchema = new mongoose.Schema({
    teacherName: {
        type: String,
        // required: [true, "Please provide a username."],
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email.",
        ],
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        select: false,
        required: [true, "Password is required."],
    },
    phone: {
        type: Number,
        match: [
            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
            "Please provide a valid phone number.",
        ],
        required: [true, "Password is required."],
    },
});

TeacherSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

TeacherSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;

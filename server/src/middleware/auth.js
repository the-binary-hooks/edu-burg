/*
 * Title: Middleware to protect private route
 * Description: Won't let any user without valid JWT token access
 *              private data
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
import jwt from "jsonwebtoken";
// Models
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";
// Handling Errors
import ErrorResponse from "../utils/errorResponse.js";

// Middleware
export const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(
            new ErrorResponse("Not authorized to access this route.", 401)
        );
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const student = await Student.findById(decoded.id);
        if (!student) {
            const teacher = await Teacher.findById(decoded.id);
            if (!teacher) {
                const admin = await Admin.findById(decoded.id);
                if (!admin) {
                    return next(
                        new ErrorResponse("No user found with this id", 404)
                    );
                } else {
                    req.user = admin;
                }
            } else {
                req.user = teacher;
            }
        } else {
            req.user = student;
        }
        next();
    } catch (error) {
        return next(
            new ErrorResponse("Not authorized to access this route", 401)
        );
    }
};

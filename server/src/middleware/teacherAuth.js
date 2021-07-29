import jwt from "jsonwebtoken";
import Teacher from "../models/Teacher.js";
import ErrorResponse from "../utils/errorResponse.js";

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

        const teacher = await Teacher.findById(decoded.id);

        if (!teacher) {
            return next(new ErrorResponse("No teacher found with this id", 404));
        }

        req.teacher = teacher;

        next();
    } catch (error) {
        return next(
            new ErrorResponse("Not authorized to access this route", 401)
        );
    }
};

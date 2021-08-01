import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";
import ErrorResponse from "../utils/errorResponse.js";
import { sendResponse } from "../utils/sendResponse.js";

export const login = async (req, res, next) => {
    // Read data from request body
    const { id, password } = req.body;

    // If any of the id or password is absent, throw error
    if (!id || !password) {
        return next(
            new ErrorResponse("Please provide the id and password", 400)
        );
    }

    try {
        // let student;
        // let teacher;
        // let admin;
        let user;
        // let userRole;

        user = await Teacher.findOne({ id }).select("+password");
        if (!user) user = await Student.findOne({ id }).select("+password");
        if (!user) user = await Admin.findOne({ id }).select("+password");
        if (user) {
            let userRole = user.role;
            let userName = user.role + Name;
            sendResponse(user.userName, toString(userRole), user, 200, res);
        } else {
            return next(new ErrorResponse("Invalid Credentials", 401));
        }
        // Find teacher with the id and password sent
        //  from the teacher collection
        // teacher = await Teacher.findOne({ id }).select("+password");
        // if (teacher)
        //     sendResponse(teacher.teacherName, "teacher", teacher, 200, res);
        // else {
        //     student = await Student.findOne({ id }).select("+password");
        //     if (student)
        //         sendResponse(student.studentName, "student", student, 200, res);
        //     else {
        //         admin = await Admin.findOne({ id }).select("+password");
        //         if (admin)
        //             sendResponse(admin.adminName, "admin", admin, 200, res);
        //     }
        // }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

export default [];

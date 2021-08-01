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
        let student;
        let teacher;
        let admin;
        let addInfo;

        // Find teacher with the id and password sent
        //  from the teacher collection
        teacher = await Teacher.findOne({ id }).select("+password");

        if (teacher) {
            const { teacherName, email, department, gender, picture } = teacher;
            addInfo = {
                teacherName,
                role: "teacher",
                status,
                email,
                department,
                gender,
                picture,
            };
            sendResponse(addInfo, teacher, 200, res);
        } else {
            // If no teacher is found, find student with the id and password sent
            // from the student collection
            student = await Student.findOne({ id }).select("+password");
            if (student) {
                const {
                    studentName,
                    email,
                    department,
                    semester,
                    session,
                    program,
                    FathersName,
                    MothersName,
                    gender,
                    picture,
                } = student;
                addInfo = {
                    studentName,
                    role: "student",
                    status,
                    email,
                    department,
                    semester,
                    session,
                    program,
                    FathersName,
                    MothersName,
                    gender,
                    picture,
                };

                sendResponse(addInfo, student, 200, res);
            } else {
                // If no teacher or student is found, find admin with the id and password sent
                // from the admin collection
                admin = await Admin.findOne({ id }).select("+password");
                if (admin) {
                    const { adminName, email, gender, picture } = admin;
                    addInfo = {
                        adminName,
                        role: "admin",
                        email,
                        gender,
                        picture,
                    };

                    sendResponse(addInfo, admin, 200, res);
                } else {
                    // If no user is found in all the three type of collections,
                    // credentials are invalid
                    return next(new ErrorResponse("Invalid Credentials", 401));
                }
            }
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

export default [];

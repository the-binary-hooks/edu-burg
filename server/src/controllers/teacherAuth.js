import Teacher from "../models/Teacher.js";
import { sendResponse } from "../utils/sendResponse.js";

export const addATeacher = async (req, res, next) => {
    // Read data from request body
    const {
        id,
        teacherName,
        email,
        password,
        phone,
        department,
        gender,
        picture,
    } = req.body;

    const teacherInfo = {
        id,
        teacherName,
        email,
        password,
        phone: parseInt(phone),
        department,
        gender,
        picture,
    };

    // Create an instance of the Model Teacher
    const teacher = await new Teacher(teacherInfo);

    // Save the teacher to the teacher collection
    teacher.save((err) => {
        if (err) {
            next(err);
        } else {
            sendResponse(teacher.teacherName, "teacher", teacher, 200, res);
        }
    });
};

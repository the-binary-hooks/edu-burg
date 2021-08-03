import Teacher from "../models/Teacher.js";
import ErrorResponse from "../utils/errorResponse.js";
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
        bio,
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
        bio,
    };

    // Create an instance of the Model Teacher
    const teacher = await new Teacher(teacherInfo);

    const addInfo = {
        teacherName,
        role: "teacher",
        email,
        department,
        gender,
        picture,
        bio,
    };

    // Save the teacher to the teacher collection
    teacher.save((err) => {
        if (err) {
            next(err);
        } else {
            sendResponse(addInfo, teacher, 200, res);
        }
    });
};

export const teachers = async (req, res, next) => {
    try {
        const teachers = await Teacher.find({});
        res.send(teachers);
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
};

export const updateStatus = async (req, res, next) => {
    const status = req.body.status;
    const id = req.params.id;
    try {
        const response = await Teacher.updateOne({ id }, { status });
        res.status(200).send({
            success: "true",
            nModified: response.nModified,
        });
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
};

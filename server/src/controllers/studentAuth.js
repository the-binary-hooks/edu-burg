import Student from "../models/Student.js";
import { sendResponse } from "../utils/sendResponse.js";

export const addAStudent = async (req, res, next) => {
    // Read data from request body
    const {
        id,
        studentName,
        email,
        password,
        phone,
        department,
        semester,
        session,
        program,
        FathersName,
        MothersName,
        FathersMobileNumber,
        dateOfBirth,
        permanentAddress,
        presentAddress,
        sscOLevelDakhilInfo,
        hscALevelAlimDiplomaInfo,
        gender,
        picture,
    } = req.body;

    const studentInfo = {
        id,
        studentName,
        email,
        password,
        phone: parseInt(phone),
        department,
        semester,
        session,
        program,
        FathersName,
        MothersName,
        FathersMobileNumber,
        dateOfBirth,
        permanentAddress,
        presentAddress,
        sscOLevelDakhilInfo,
        hscALevelAlimDiplomaInfo,
        gender,
        picture,
    };

    const addInfo = {
        studentName,
        role: "student",
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

    // Create an instance of the Model Student
    const student = await new Student(studentInfo);

    // Save the student to the student collection
    student.save((err) => {
        if (err) {
            next(err);
        } else {
            sendResponse(addInfo, student, 200, res);
        }
    });
};

export const getStudents = async (req, res, next) => {
    try {
        const students = await Student.find({});
        res.send(students);
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
};

export const updateStatus = async (req, res, next) => {
    const status = req.body.status;
    const id = req.params.id;
    try {
        const response = await Student.updateOne({ id }, { status });
        res.status(200).send({
            success: "true",
            nModified: response.nModified,
        });
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
};

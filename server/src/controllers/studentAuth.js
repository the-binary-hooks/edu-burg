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

    // Create an instance of the Model Student
    const student = await new Student(studentInfo);

    // Save the student to the student collection
    student.save((err) => {
        if (err) {
            next(err);
        } else {
            sendResponse("student", student, 200, res);
        }
    });
};

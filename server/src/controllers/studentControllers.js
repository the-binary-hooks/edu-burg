/*
 * Title: Controllers of the student router
 * Description: declares functions to
 *              add a student to the DB,
 *              get all the records of the students,
 *              update status of a student
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
// Models
import Student from "../models/Student.js";
// Handling Error
import ErrorResponse from "../utils/errorResponse.js";
// Sending response
import { sendResponse } from "../utils/sendResponse.js";

// Student Controllers Object --- module scaffolding
const studentControllers = {};

studentControllers.addAStudent = async (req, res, next) => {
    console.log("body", req.body);
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

    console.log("stduentInfo", studentInfo);

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
            console.log(err);
            next(new ErrorResponse(err.message));
        } else {
            sendResponse(addInfo, student, 200, res);
        }
    });
};

studentControllers.getStudents = async (req, res, next) => {
    try {
        // Get all the students saved to the DB
        const students = await Student.find({})
            .populate("semesterResults")
            .populate("courses");
        res.send(students);
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
};

studentControllers.getByName = async (req, res, next) => {
    const searchStr = req.params.searchStr;
    if (searchStr) {
        try {
            // Get all the students saved to the DB
            const students = await Student.find({
                studentName: new RegExp(searchStr, "i"),
            })
                .populate("semesterResults")
                .populate("courses");
            res.send(students);
        } catch (err) {
            next(new ErrorResponse(err.message));
        }
    }
};

studentControllers.updateStatus = async (req, res, next) => {
    // Read Data from request body
    const status = req.body.status;
    const id = req.params.id;
    try {
        // Update student status
        const response = await Student.updateOne({ id }, { status });
        res.status(200).send({
            success: "true",
            nModified: response.nModified,
        });
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
};

export default studentControllers;

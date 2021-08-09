/*
 * Title: Controllers of the teacher router
 * Description: declares functions to
 *              add a teacher to the DB,
 *              get all the records of the teachers,
 *              update status of a teacher
 *              publish result of a students
 *              get all the results published
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
// Models
import Teacher from "../models/Teacher.js";
import Result from "../models/Result.js";
import Student from "../models/Student.js";
// Handling errors
import ErrorResponse from "../utils/errorResponse.js";
// Sending response
import { sendResponse } from "../utils/sendResponse.js";

// Teacher Controllers Object --- module scaffolding
const teacherControllers = {};

teacherControllers.addATeacher = async (req, res, next) => {
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

teacherControllers.getTeachers = async (req, res, next) => {
    try {
        // Get all the teachers saved to the DB
        const teachers = await Teacher.find({});
        res.send(teachers);
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
};

teacherControllers.updateStatus = async (req, res, next) => {
    // Read Data from request body
    const status = req.body.status;
    const id = req.params.id;
    try {
        // Update teacher status
        const response = await Teacher.updateOne({ id }, { status });
        res.status(200).send({
            success: "true",
            nModified: response.nModified,
        });
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
};

teacherControllers.publishResult = async (req, res, next) => {
    // Read data from request body
    const { comment, cgpa, studentId, semester, imageURL } = req.body;

    const student = await Student.findOne({ id: studentId });

    const resultInfo = {
        comment,
        cgpa,
        studentId: student._id,
        semester,
        imageURL,
    };

    // Create an instance of the Model Teacher
    const result = await new Result(resultInfo);

    // Save the result to the result collection
    result.save((err) => {
        if (err) {
            next(new ErrorResponse(err.message));
        }
    });

    // Add the result to the specific student's record
    Student.findByIdAndUpdate(
        student._id,
        { $push: { semesterResults: result._id } },
        { useFindAndModify: false },
        function (err, docs) {
            if (err) {
                next(new ErrorResponse(err.message));
            } else {
                res.status(200).send({ success: true, result });
            }
        }
    );
};

teacherControllers.getResults = async (req, res, next) => {
    // Get all the results ever added to the db
    const results = await Result.find({}).populate("studentId");
    res.send(results);
};

export default teacherControllers;

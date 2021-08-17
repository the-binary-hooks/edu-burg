/*
 * Title: Controllers of the admin router
 * Description: declares functions to add an admin to the DB,
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
// Models
import Admin from "../models/Admin.js";
import Course from "../models/Course.js";
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";

// Sending response
import { sendResponse } from "../utils/sendResponse.js";

// Handling errors
import ErrorResponse from "../utils/errorResponse.js";

// Admin Controllers Object --- module scaffolding
const adminControllers = {};

adminControllers.addAAdmin = async (req, res, next) => {
    // Read data from request body
    const { id, adminName, email, password, phone, gender, picture } = req.body;

    const adminInfo = {
        id,
        adminName,
        email,
        password,
        phone: parseInt(phone),
        gender,
        picture,
    };

    const addInfo = {
        adminName,
        role: "admin",
        email,
        gender,
        picture,
    };

    // Create an instance of the Model Admin
    const admin = await new Admin(adminInfo);

    // Save the admin to the admin collection
    admin.save((err) => {
        if (err) {
            next(new ErrorResponse(err.message));
        } else {
            sendResponse(addInfo, admin, 200, res);
        }
    });
};

adminControllers.addCourse = async (req, res, next) => {
    const {
        courseTitle,
        courseCode,
        courseTeacher,
        courseStudents,
        department,
    } = req.body;

    const teacher = await Teacher.findOne({ id: courseTeacher });

    const studentIds = courseStudents
        .split(",")
        .map((studentId) => studentId.trim());

    const studentDBIds = [];

    studentIds.map(async (studentId) => {
        const student = await Student.findOne({ id: studentId });
        if (student) {
            studentDBIds.push(student._id);
        }
    });

    setTimeout(async () => {
        const courseData = {
            courseTitle,
            courseCode,
            courseTeacher: teacher._id,
            courseStudents: studentDBIds,
            department,
        };

        // Create an instance of the Model Course
        const course = await new Course(courseData);

        // Save the course to the course collection
        course.save((err) => {
            if (err) {
                console.log(err);
                next(new ErrorResponse(err.message));
            } else {
                res.status(200).send({ success: true, courseData });
            }
        });

        console.log(course);

        // Find the teacher and  Update Teacher course array
        Teacher.findByIdAndUpdate(
            teacher._id,
            { $push: { courses: course._id } },
            { useFindAndModify: false },
            function (error, success) {
                if (error) {
                    console.log(error);
                }
            }
        );

        // Find the students and Update students course array
        studentDBIds.map(async (studentId) => {
            Student.findByIdAndUpdate(
                studentId,
                { $push: { courses: course._id } },
                { useFindAndModify: false },
                function (err, docs) {
                    if (err) {
                        console.log(err);
                        // next(new ErrorResponse(err.message));
                    } else {
                        // res.status(200).send({ success: true, course });
                    }
                }
            );
        });
    }, 1000);
};

export default adminControllers;

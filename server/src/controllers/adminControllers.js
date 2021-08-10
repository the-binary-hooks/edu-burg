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
import { sendResponse } from "../utils/sendResponse.js";
import Teacher from "../models/Teacher.js";
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
    const courseData = {
        courseTitle,
        courseCode,
        courseTeacher,
        courseStudents,
        department,
    };

    // Create an instance of the Model Course
    const course = await new Course(courseData);
    console.log(courseData);

    // Save the course to the course collection
    course.save((err) => {
        if (err) {
            console.log(error);
        } else {
            res.status(200).send({ success: true, courseData });
        }
    });

    // Find the teacher and  Update Teacher course array
    Teacher.findOneAndUpdate(
        { id: courseTeacher }, 
        { $push: { courses: courseData  } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
    

    // Find the students and  Update students course array
};

export default adminControllers;

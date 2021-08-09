import Admin from "../models/Admin.js";
import Course from "../models/Course.js";
import { sendResponse } from "../utils/sendResponse.js";

export const addAAdmin = async (req, res, next) => {
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
            next(err);
        } else {
            sendResponse(addInfo, admin, 200, res);
        }
    });
};


export const addCourse = async(req,res,next) => {
    const {courseTitle, courseCode, courseTeacher,courseStudents, department} = req.body;
    const courseData = {
        courseTitle,
        courseCode,
        courseTeacher,
        courseStudents,
        department
    }

    // Create an instance of the Model Course
    const course = await new Course(courseData);
    console.log(courseData)

    // Save the course to the course collection
    course.save((err) => {
        if (err) {
           console.log(error);
        } else {
            res.status(200).send({success: true,courseData})
        }
    });

    // Find the teacher 

    // Update Teacher course array

    // Update student teacher array 

}
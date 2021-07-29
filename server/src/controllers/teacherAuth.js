import Teacher from "../models/Teacher.js";
import ErrorResponse from "../utils/errorResponse.js";

export const addATeacher = async (req, res, next) => {
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
    console.log(teacherInfo)
    const teacher = await new Teacher(teacherInfo);
    teacher.save((err) => {
        if (err) {
            next(err);
        } else {
            sendToken("teacher", teacher, 200, res);
        }
    });
};

export const login = async (req, res, next) => {
    const { id, password } = req.body;

    if (!id || !password) {
        return next(
            new ErrorResponse("Please provide the id and password", 400)
        );
    }

    try {
        let teacher;
        teacher = await Teacher.findOne({ id }).select("+password");
        if (teacher) sendToken("teacher", teacher, 200, res);
        return next(new ErrorResponse("Invalid Credentials", 401));
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

const sendToken = (role, teacher, statusCode, res) => {
    const token = teacher.getSignedToken();
    res.status(statusCode).json({ success: true, token, role });
};

export default [];

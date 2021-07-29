import Teacher from "../models/Teacher.js";
import ErrorResponse from "../utils/errorResponse.js";

export const addATeacher = async (req, res, next) => {
    const teacher = await new Teacher(req.body);
    teacher.save((err) => {
        if (err) {
            next(err);
        } else {
            sendToken(teacher, 200, res);
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
        if (teacher) sendToken(teacher, 200, res);
        return next(new ErrorResponse("Invalid Credentials", 401));
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

const sendToken = (teacher, statusCode, res) => {
    const token = teacher.getSignedToken();
    res.status(statusCode).json({ success: true, token });
};

export default [];

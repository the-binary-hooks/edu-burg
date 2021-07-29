import Teacher from "../models/Teacher.js";
import ErrorResponse from "../utils/errorResponse.js";

export const addATeacher = async (req, res, next) => {
    const { teacherName, email, password, phone } = req.body;
    let teacher;
    if (email) {
        teacher = await Teacher.findOne({ email });
        if (teacher) {
            sendToken(teacher, 200, res);
        }
    } else if (phone) {
        teacher = await Teacher.findOne({ phone });
        if (teacher) sendToken(teacher, 200, res);
    }
    if (!teacher) {
        try {
            if (!email) {
                const teacher = await Teacher.create({
                    teacherName,
                    phone,
                });
                sendToken(teacher, 200, res);
            } else if (!phone) {
                const teacher = await Teacher.create({
                    teacherName,
                    email,
                    password,
                });
                sendToken(teacher, 200, res);
            } else {
                const teacher = await Teacher.create({
                    teacherName,
                    email,
                    password,
                    phone,
                });

                sendToken(teacher, 200, res);
            }
        } catch (err) {
            next(err);
        }
    }
};

export const login = async (req, res, next) => {
    const { email, password, phone } = req.body;

    if (!phone && (!email || !password)) {
        return next(
            new ErrorResponse(
                "Please provide an email and password or phone number.",
                400
            )
        );
    }

    try {
        let teacher;
        if (email && password) {
            teacher = await Teacher.findOne({ email }).select("+password");

            if (teacher) sendToken(teacher, 200, res);
        } else {
            teacher = await Teacher.findOne({ phone });
            if (teacher) sendToken(teacher, 200, res);
        }
        if (!teacher) {
            return next(new ErrorResponse("Invalid Credentials", 401));
        }
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

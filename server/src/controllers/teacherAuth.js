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

// {
//     "id": "5600",
//     "teacherName": "John Doe",
//     "email": "johndoe@gmail.com",
//     "password": "John1987",
//     "phone": "99988888899",
//     "bio": "Senior Professor of Physics in the University of Bangladesh",
//     "department": "Physics",
//     "gender": "male",
//     "picture": "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
// }

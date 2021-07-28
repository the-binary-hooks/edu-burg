import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";

export const register = async (req, res, next) => {
    const { username, email, password, phone } = req.body;
    let user;
    if (email) {
        user = await User.findOne({ email });
        if (user) {
            sendToken(user, 200, res);
        }
    } else if (phone) {
        user = await User.findOne({ phone });
        if (user) sendToken(user, 200, res);
    }
    if (!user) {
        try {
            if (!email) {
                const user = await User.create({
                    username,
                    phone,
                });
                sendToken(user, 200, res);
            } else if (!phone) {
                const user = await User.create({
                    username,
                    email,
                    password,
                });
                sendToken(user, 200, res);
            } else {
                const user = await User.create({
                    username,
                    email,
                    password,
                    phone,
                });

                sendToken(user, 200, res);
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
        let user;
        if (email && password) {
            user = await User.findOne({ email }).select("+password");

            if (user) sendToken(user, 200, res);
        } else {
            user = await User.findOne({ phone });
            if (user) sendToken(user, 200, res);
        }
        if (!user) {
            return next(new ErrorResponse("Invalid Credentials", 401));
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token });
};

export default [];

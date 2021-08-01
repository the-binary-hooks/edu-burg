import Admin from "../models/Admin.js";
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

    // Create an instance of the Model Admin
    const admin = await new Admin(adminInfo);

    // Save the admin to the admin collection
    admin.save((err) => {
        if (err) {
            next(err);
        } else {
            sendResponse("admin", admin, 200, res);
        }
    });
};

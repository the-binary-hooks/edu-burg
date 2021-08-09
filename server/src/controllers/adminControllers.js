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
// Handling Error
import ErrorResponse from "../utils/errorResponse.js";
// Sending response
import { sendResponse } from "../utils/sendResponse.js";

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

export default adminControllers;

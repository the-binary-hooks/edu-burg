/*
 * Title: Middleware to handle errors gracefully
 * Description: Won't console.error and choke the server
 *              private data
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
// Handling Errors
import ErrorResponse from "../utils/errorResponse.js";

// Middleware
const errorHandler = (err, req, res, nex) => {
    let error = { ...err };
    error.message = err.message;

    if (err.code === 11000) {
        const message = "Duplicate Field Value Enter";
        error = new ErrorResponse(message, 400);
    }

    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(err.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error",
    });
};

export default errorHandler;

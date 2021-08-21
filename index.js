/*
 * Title:  Server For Edu Burg ERP
 * Description: ExpressJS application that uses Mongoose, socket.io and Redis for sending data from
 *              the DB to the client
 * Author: Lamisa Zamzam, MD Nakibul Hosen Nahid
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
// For using environment vars
import "dotenv";
import dotenv from "dotenv";
dotenv.config();

import path from "path";
const __dirname = path.resolve();

// Express -- framework of node
import express from "express";

// CORS -- for Cross Origin Resource Sharing
import cors from "cors";

// File Upload -- to upload files
// const fileUpload = require("express-fileupload");
import fileUpload from "express-fileupload";

// Routers
import authRouter from "./server/src/routes/auth.js";
import privateRouter from "./server/src/routes/private.js";
import teacherRouter from "./server/src/routes/teacherRoutes.js";
import studentRouter from "./server/src/routes/studentRoutes.js";
import adminRouter from "./server/src/routes/adminRoutes.js";
import postRoutes from "./server/src/routes/postRoutes.js";

// Mongoose -- framework of MongoDB
import mongoose from "mongoose";

// For handling Errors in case they occur
import errorHandler from "./server/src/middleware/error.js";
import ErrorResponse from "./server/src/utils/errorResponse.js";

// Initialize the app
const app = express();

// Connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI ||
                `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uabc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
            {
                auth: { authSource: "admin" },
                user: process.env.DB_USER,
                pass: process.env.DB_PASS,
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
            }
        );
    } catch (err) {
        new ErrorResponse(err);
    }

    console.log("MongoDB connected");
};
connectDB();

// Use CORS
app.use(cors());

// for parsing the req.files
app.use(fileUpload());

// for parsing the req.body
app.use(express.json());

// Routes
// Use the routers to catch any call in the specific routes
app.use("/api/auth", authRouter);

app.use("/api/teacher", teacherRouter);

app.use("/api/student", studentRouter);

app.use("/api/admin", adminRouter);

app.use("/api/private", privateRouter);

app.use("/api/post", postRoutes);

// Root api call
if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "client/build")));

    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Handle Error
app.use(errorHandler);

// Make the app listen at port 5000
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening`);
});

// Do not throw an error and chock the server
process.on("unhandledRejection", (err, promise) => {
    console.log(`logged error: ${err}`);
    server.close(() => process.exit(1));
});

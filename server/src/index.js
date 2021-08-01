// For using environment vars
import "dotenv";
import dotenv from "dotenv";
dotenv.config();

// Express -- framework of node
import express from "express";

// CORS -- for Cross Origin Resource Sharing
import cors from "cors";

// Routers
import authRouter from "./routes/auth.js";
import privateRouter from "./routes/private.js";
import teacherRouter from "./routes/teacherAuth.js";
import studentRouter from "./routes/studentAuth.js";
import adminRouter from "./routes/adminAuth.js";

// Mongoose -- framework of MongoDB
import mongoose from "mongoose";

// For handling Errors in case they occur
import errorHandler from "./middleware/error.js";
import ErrorResponse from "./utils/errorResponse.js";

// Initialize the app
const app = express();

// Connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(
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

// for parsing the req.body
app.use(express.json());

// Routes
// Use the routers to catch any call in the specific routes
app.use("/api/auth", authRouter);

app.use("/api/teacher", teacherRouter);

app.use("/api/student", studentRouter);

app.use("/api/admin", adminRouter);

app.use("/api/private", privateRouter);

// Root api call
app.get("/", (req, res) => {
    res.send("Hello World!");
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

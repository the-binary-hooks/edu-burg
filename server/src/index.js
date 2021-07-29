import "dotenv";
import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/error.js";
import cors from "cors";
import authRouter from "./routes/auth.js";
import privateRouter from "./routes/private.js";
import mongoose from "mongoose";
import teacherRouter from "./routes/teacherAuth.js";

const app = express();

dotenv.config();

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
        next(err);
    }

    console.log("MongoDB connected");
};

connectDB();

app.use(cors());

// for parsing the req.body
app.use(express.json());

app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/teacher", teacherRouter)

app.use("/api/private", privateRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Error Handle
app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening`);
});

// Do not log error
process.on("unhandledRejection", (err, promise) => {
    console.log(`logged error: ${err}`);
    server.close(() => process.exit(1));
});

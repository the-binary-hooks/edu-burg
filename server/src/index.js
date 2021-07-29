import "dotenv";
import express from "express";
import dotenv from "dotenv";
// import {connectDB} from "./config/db.js";
import errorHandler from "./middleware/error.js";
import cors from "cors";
import authRouter from "./routes/auth.js";
import privateRouter from "./routes/private.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();

// Connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://binaryHook10:LfVQfkn0TGmdZbwx@cluster0.uabc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                auth: { authSource: "admin" },
                user: "binaryHook10",
                pass: "LfVQfkn0TGmdZbwx",
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
            }
        );
    } catch (err) {
        console.log(err);
    }

    console.log("MongoDB connected");
};

connectDB();

app.use(cors());

// for parsing the req.body
app.use(express.json());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/auth", authRouter);

app.use("/api/private", privateRouter);

// Error Handle
// app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening`);
});

// Do not log error
// process.on("unhandledRejection", (err, promise) => {
//     console.log(`logged error: ${err}`);
//     server.close(() => process.exit(1));
// });

import "dotenv";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import errorHandler from "./middleware/error.js";
import cors from "cors";
import authRouter from "./routes/auth.js";
import privateRouter from "./routes/private.js";

const app = express();

dotenv.config();

// Connect DB
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
app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening`);
});

// Do not log error
process.on("unhandledRejection", (err, promise) => {
    console.log(`logged error: ${err}`);
    server.close(() => process.exit(1));
});

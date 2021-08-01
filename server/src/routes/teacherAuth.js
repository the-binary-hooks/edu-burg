import express from "express";
import { addATeacher } from "../controllers/teacherAuth.js";

let router = express.Router();

// Path => http://localhost:5000/api/teacher/add
router.route("/add").post(addATeacher);

export default router;

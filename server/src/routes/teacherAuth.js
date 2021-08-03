import express from "express";
import { addATeacher, teachers, updateStatus } from "../controllers/teacherAuth.js";

let router = express.Router();

// Path => http://localhost:5000/api/teacher/add
router.route("/add").post(addATeacher);

router.route("/getAll").get(teachers);

router.route("/updateStatus/:id").patch(updateStatus);

export default router;

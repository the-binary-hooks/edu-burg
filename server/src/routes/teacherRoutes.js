import express from "express";
import { addATeacher, getTeachers, updateStatus } from "../controllers/teacherControllers.js";

let router = express.Router();

// Path => http://localhost:5000/api/teacher/add
router.route("/add").post(addATeacher);

router.route("/getAll").get(getTeachers);

router.route("/updateStatus/:id").patch(updateStatus);

export default router;

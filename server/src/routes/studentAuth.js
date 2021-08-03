import express from "express";
import { addAStudent, getStudents, updateStatus } from "../controllers/studentAuth.js";

let router = express.Router();

// Path => http://localhost:5000/api/student/add
router.route("/add").post(addAStudent);

router.route("/getAll").get(getStudents);

router.route("/updateStatus/:id").patch(updateStatus);

export default router;

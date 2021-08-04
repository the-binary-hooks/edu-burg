import express from "express";
import {
    addATeacher,
    getTeachers,
    updateStatus,
    publishResult,
    getResults,
} from "../controllers/teacherControllers.js";

let router = express.Router();

// Path => http://localhost:5000/api/teacher/add
router.route("/add").post(addATeacher);

router.route("/getAll").get(getTeachers);

router.route("/updateStatus/:id").patch(updateStatus);

router.route("/publishResult").post(publishResult);

router.route("/allResults").get(getResults);

export default router;

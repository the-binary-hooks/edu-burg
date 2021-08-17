/*
 * Title: Routes when someone hits /api/teacher route of the server
 * Description: Declares the routes on /api/teacher and binds the controllers with them
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
import express from "express";
import teacherControllers from "../controllers/teacherControllers.js";

// Getting controllers
const { addATeacher, getTeachers, updateStatus, publishResult, getResults } =
    teacherControllers;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /api/teacher/add
router.route("/add").post(addATeacher);

// Path => /api/teacher/getAll
router.route("/getAll").get(getTeachers);

// Path => /api/teacher/updateStatus/:id
router.route("/updateStatus/:id").patch(updateStatus);

// Path => /api/teacher/publishResult
router.route("/publishResult").post(publishResult);

// Path => /api/teacher/allResults
router.route("/allResults").get(getResults);

export default router;

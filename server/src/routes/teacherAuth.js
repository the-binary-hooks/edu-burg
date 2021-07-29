import express from "express";
import { addATeacher } from "../controllers/teacherAuth.js";

let router = express.Router();

router.route("/").post(addATeacher);

export default router;

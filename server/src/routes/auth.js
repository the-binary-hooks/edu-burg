import express from "express";
import { login } from "../controllers/teacherAuth.js";
import { addATeacher } from "../controllers/teacherAuth.js";

let router = express.Router();

router.route("/login").post(login);
router.route("/addTeacher").post(addATeacher);

export default router;

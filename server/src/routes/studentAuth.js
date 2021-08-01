import express from "express";
import { addAStudent } from "../controllers/studentAuth.js";

let router = express.Router();

// Path => http://localhost:5000/api/student/add
router.route("/add").post(addAStudent);

export default router;

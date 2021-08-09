import express from "express";
import { addAAdmin } from "../controllers/adminControllers.js";
import {addCourse} from "../controllers/adminControllers.js"
let router = express.Router();

// Path => http://localhost:5000/api/admin/add
router.route("/add").post(addAAdmin);
router.route("/addCourse").post(addCourse)

export default router;

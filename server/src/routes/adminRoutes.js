/*
 * Title: Routes when someone hits /api/admin route of the server
 * Description: Declares the routes on /api/admin and binds the controllers with them
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
import express from "express";
import { addAAdmin } from "../controllers/adminControllers.js";
import {addCourse} from "../controllers/adminControllers.js"
let router = express.Router();

// Path => http://localhost:5000/api/admin/add
router.route("/add").post(addAAdmin);
router.route("/addCourse").post(addCourse)

export default router;

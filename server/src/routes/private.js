/*
 * Title: Routes when someone hits /api/private route of the server
 * Description: Declares the routes on /api/private and binds the controllers with them
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
import express from "express";
import { getPrivateData } from "../controllers/private.js";
import { protect } from "../middleware/auth.js";

// Router Object -- module scaffolding
let router = express.Router();

// Path => http://localhost:5000/api/private
router.route("/").get(protect, getPrivateData);

export default router;

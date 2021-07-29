import express from "express";
import { getPrivateData } from "../controllers/private.js";
import { protect } from "../middleware/teacherAuth.js";

let router = express.Router();

router.route("/").get(protect, getPrivateData);

export default router;

import express from "express";
import { getPrivateData } from "../controllers/private.js";
import { protect } from "../middleware/auth.js";

let router = express.Router();

// Path => http://localhost:5000/api/private
router.route("/").get(protect, getPrivateData);

export default router;

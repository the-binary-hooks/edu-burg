import express from "express";
import { addAAdmin } from "../controllers/adminAuth.js";

let router = express.Router();

// Path => http://localhost:5000/api/admin/add
router.route("/add").post(addAAdmin);

export default router;

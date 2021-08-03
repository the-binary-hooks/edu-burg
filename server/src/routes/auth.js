import express from "express";
import { login, getById } from "../controllers/auth.js";

let router = express.Router();

// Path => http://localhost:5000/api/auth/login
router.route("/login").post(login);

router.route("/getById/:id").get(getById);

export default router;

/*
 * Title: Routes when someone hits /api/auth route of the server
 * Description: Declares the routes on /api/auth and binds the controllers with them
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
import express from "express";
import authControllers from "../controllers/auth.js";

// Destructuring controllers
const { login, getById } = authControllers;

// Router Object -- module scaffolding
let router = express.Router();

// Path => http://localhost:5000/api/auth/login
router.route("/login").post(login);

// Path => http://localhost:5000/api/auth/getById
router.route("/getById/:id").get(getById);

export default router;

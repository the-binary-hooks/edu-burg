/*
 * Title: Post Router
 * Description: Declares the routes on /api/post and binds the controllers with them
 * Author: A.K.M Fozlol Hoq
 * Date: 16 August, 2021 
 *
 */

// Dependencies
import express from "express";
import postControllers from "../controllers/postControllers.js";

// Destructuring controllers
const { addPost } = postControllers;

// Router Object -- module scaffolding
let router = express.Router();

// Path => http://localhost:5000/api/post/addPost
router.route("/addPost").post(addPost);

export default router;

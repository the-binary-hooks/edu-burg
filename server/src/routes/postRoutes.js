/*
 * Title: Post Router
 * Description: Declares the routes on /api/post and binds the controllers with them
 * Author: A.K.M Fozlol Hoq
 * Created Date: 16 August, 2021 
 * Last Update: 19 August, 2021 
 *
 */

// Dependencies
import express from "express";
import postControllers from "../controllers/postControllers.js";

// Destructuring controllers
const { addPost, getPost } = postControllers;

// Router Object -- module scaffolding
let router = express.Router();

// Path => http://localhost:5000/api/post/addPost
router.route("/addPost").post(addPost);

// Path => http://localhost:5000/api/post/getPost
router.route("/getPost").post(getPost);

export default router;

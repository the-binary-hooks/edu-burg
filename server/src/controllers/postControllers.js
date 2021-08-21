/*
 * Title: Controllers of the post router
 * Description: declares functions to add a post to the DB,
 * Author: A.K.M Fozlol Hoq
 * Created Date: 16 August, 2021 
 * Last Update: 19 August, 2021 
 *
 */

// Dependencies
// Models
import Post from "../models/Post.js";
import File from "../models/File.js";
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";

// Handling errors
import ErrorResponse from "../utils/errorResponse.js";

// Post Controllers Object --- module scaffolding
const postControllers = {};


postControllers.addPost = async (req, res, next) => {
    // Read data from request body
    const {
        id,
        description,
        role,
        imageOneCode,
        imageTwoCode,
        imageThreeCode,
        videoCode,
        postID,
        imageOne,
        imageTwo,
        imageThree,
        video,
        email,
    } = req.body;

    const postInfo = {
        description,
        id,
        comments: [],
        reactions: [],
        imageOneCode,
        imageTwoCode,
        imageThreeCode,
        videoCode,
        postID,
        email,
    };

    // Create an instance of the Model Post
    const post = await new Post(postInfo);

    // Save the post to the post collection
    post.save(async (err) => {
        if (err) {
            next(new ErrorResponse(err.message));
        } else {
            if (role === "student") {
                Student.findByIdAndUpdate(
                    id,
                    { $push: { posts: post._id } },
                    { useFindAndModify: false },
                    function (error, success) {
                        if (error) {
                            next(new ErrorResponse(error.message));
                        }
                        if (success) {
                            updateFileCollection()
                            // res.status(200).send({ success: true });
                        }
                    }
                );
            } else if (role === "teacher") {
                Teacher.findByIdAndUpdate(
                    id,
                    { $push: { posts: post._id } },
                    { useFindAndModify: false },
                    function (error, success) {
                        if (error) {
                            next(new ErrorResponse(error.message));
                        }
                        if (success) {
                            updateFileCollection()
                            // res.status(200).send({ success: true });
                        }
                    }
                );
            } else if (role === "admin") {
                Admin.findByIdAndUpdate(
                    id,
                    { $push: { posts: post._id } },
                    { useFindAndModify: false },
                    function (error, success) {
                        if (error) {
                            console.log(error);
                            next(new ErrorResponse(error.message));
                        }
                        if (success) {
                            updateFileCollection()
                            // res.status(200).send({ success: true });
                        }
                    }
                );
            } else {
                console.log("invalid role");
            }
        }
    });

    const updateFileCollection = async()=>{
        if ( imageOneCode || imageTwoCode || imageThreeCode ||videoCode){
            if (imageOneCode) {
                console.log(imageOneCode);
                const fileInfo = {
                    file: imageOne,
                    code: imageOneCode,
                };
                const file = await new File(fileInfo);
                file.save((err) => {
                    if (err) {
                        next(new ErrorResponse(err.message));
                    }else{
                        res.status(200).send({ success: true });
                    }
                });
            }
            if (imageTwoCode) {
                const fileInfo = {
                    file: imageTwo,
                    code: imageTwoCode,
                };
                const file = await new File(fileInfo);
                file.save((err) => {
                    if (err) {
                        next(new ErrorResponse(err.message));
                    }else{
                        res.status(200).send({ success: true });
                    }
                });
            }
            if (imageThreeCode) {
                const fileInfo = {
                    file: imageThree,
                    code: imageThreeCode,
                };
                const file = await new File(fileInfo);
                file.save((err) => {
                    if (err) {
                        next(new ErrorResponse(err.message));
                    }else{
                        res.status(200).send({ success: true });
                    }
                });
            }
            if (videoCode) {
                const fileInfo = {
                    file: video,
                    code: videoCode,
                };
                const file = await new File(fileInfo);
                file.save((err) => {
                    if (err) {
                        next(new ErrorResponse(err.message));
                    }else{
                        res.status(200).send({ success: true });
                    }
                });
            }
        }else{
            res.status(200).send({ success: true });
        }
        
    }
    
};


postControllers.getPost = async (req, res, next) => {
    // Read data from request body
    const {
        id
    } = req.body;

    try {
        // Get all the posts saved to the DB of this user
        // const posts = await Post.find({id:id});
        // res.send(posts);
        await Post.find({id:id}, (err,data) => {
            if (err) {
                next(new ErrorResponse(err.message));
            }else{
                res.status(200).send({ data: data, result:true });
            }
        })
    } catch (err) {
        next(new ErrorResponse(err.message));
    }
    
};

export default postControllers;

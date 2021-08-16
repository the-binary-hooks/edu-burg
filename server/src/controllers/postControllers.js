/*
 * Title: Controllers of the post router
 * Description: declares functions to add a post to the DB,
 * Author: A.K.M Fozlol Hoq
 * Date: 16 August, 2021 
 *
 */

// Dependencies
// Models
import Post from "../models/Post.js";
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";

// Sending response
import { sendResponse } from "../utils/sendResponse.js";

// Handling errors
import ErrorResponse from "../utils/errorResponse.js";

// Post Controllers Object --- module scaffolding
const postControllers = {};

postControllers.addPost = async (req, res, next) => {
    // Read data from request body
    const { id, description, role, imageOneCode, imageTwoCode, imageThreeCode, videoCode,postID
        , imageOne, imageTwo, imageThree, video, email } = req.body;
    
    console.log(description,'description 30')
    const postInfo = {
        description,
        id,
        comments: [],
        reactions:[],
        imageOneCode,
        imageTwoCode,
        imageThreeCode,
        videoCode,
        postID,
        email
    };

    // Create an instance of the Model Post
    const post = await new Post(postInfo);

    // Save the post to the post collection
    post.save((err) => {
        if (err) {
            console.log(err,'50');
            next(new ErrorResponse(err.message));
        } else {
            if(role ==='student'){
                Student.findByIdAndUpdate(
                      id,
                      { $push: { posts: postID } },
                      { useFindAndModify: false },
                      function (error, success) {
                          if (error) {
                              console.log(error);
                              next(new ErrorResponse(error.message));
                          }
                          if(success) {
                              res.send({'success':true});
                          }
                      }
                  );
          }
            else if(role ==='teacher'){
                  Teacher.findByIdAndUpdate(
                        id,
                        { $push: { posts: postID } },
                        { useFindAndModify: false },
                        function (error, success) {
                            if (error) {
                                console.log(error);
                                next(new ErrorResponse(error.message));
                            }
                            if(success) {
                                res.send({'success':true});
                            }
                        }
                    );
            }
            else if(role ==='admin'){
                Admin.findByIdAndUpdate(
                      id,
                      { $push: { posts: postID } },
                      { useFindAndModify: false },
                      function (error, success) {
                          if (error) {
                              console.log(error);
                              next(new ErrorResponse(error.message));
                          }
                          if(success) {
                            res.send({'success':true});
                          }
                      }
                  );
          }
            else{
                console.log('invalid role')
            }
        }
    });

    
    if(imageOneCode){
        const postInfo = {
            file:imageOne,
            code:imageOneCode,
        };
        const file = await new File(fileiInfo);
        file.save((err) => {
            if (err) {
                next(new ErrorResponse(err.message));
            }
        });
    }
    if(imageTwoCode){
        const postInfo = {
            file:imageTwo,
            code:imageTwoCode,
        };
        const file = await new File(fileiInfo);
        file.save((err) => {
            if (err) {
                next(new ErrorResponse(err.message));
            }
        });
    }
    if(imageThreeCode){
        const postInfo = {
            file:imageThree,
            code:imageThreeCode,
        };
        const file = await new File(fileiInfo);
        file.save((err) => {
            if (err) {
                next(new ErrorResponse(err.message));
            }
        });
    }
    if(videoCode){
        const postInfo = {
            file:video,
            code:videoCode,
        };
        const file = await new File(fileiInfo);
        file.save((err) => {
            if (err) {
                next(new ErrorResponse(err.message));
            }
        });
    }

};


export default postControllers;

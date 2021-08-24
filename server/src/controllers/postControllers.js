// /*
//  * Title: Controllers of the post router
//  * Description: declares functions to add a post to the DB,
//  * Author: A.K.M Fozlol Hoq
//  * Created Date: 16 August, 2021 
//  * Last Update: 19 August, 2021 
//  *
//  */

// // Dependencies
// // Models
import Admin from "../models/Admin.js";
import File from "../models/File.js";
import Post from "../models/Post.js";
import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
// Handling errors
import ErrorResponse from "../utils/errorResponse.js";


// // Post Controllers Object --- module scaffolding
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
        email,
    } = req.body;
    let imageOne, imageTwo, imageThree,  video;
    if(req.files){
        ({ imageOne, imageTwo, imageThree,  video} = req.files);
    }
    
    if(imageOne){
        const newImg = imageOne;
        const encImg = newImg.toString("base64");
        imageOne = {
          contentType: imageOne.mimetype,
          size: imageOne.size,
          img: Buffer.from(encImg, "base64"),
        };
    }
    if(imageTwo){
        const newImg = imageTwo;
        const encImg = newImg.toString("base64");
        imageTwo = {
          contentType: imageTwo.mimetype,
          size: imageTwo.size,
          img: Buffer.from(encImg, "base64"),
        };
    }
    if(imageThree){
        const newImg = imageThree;
        const encImg = newImg.toString("base64");
        imageThree = {
          contentType: imageThree.mimetype,
          size: imageThree.size,
          img: Buffer.from(encImg, "base64"),
        };
    }
    if(video){
        const newVid = video;
        const encVid= newVid.toString("base64");
        video = {
          contentType: video.mimetype,
          size: video.size,
          video: Buffer.from(encVid, "base64"),
        };
    }
    
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
            console.log(role,'role', role == '"admin"')
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
            } else if (role == "teacher") {
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
            } else if (role == "admin") {
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
        console.log(imageOne, imageTwo, imageThree)
        if ( imageOneCode || imageTwoCode || imageThreeCode ||videoCode){
            let error = '';
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
                        error ='true';
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
                        error ='true';
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
                        error ='true';
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
                        error ='true';
                    }
                });
            }
            if(!error) {
                res.status(200).send({ success: true });
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

postControllers.getFile = async (req, res, next) => {
    // Read data from request body
    const {
        code
    } = req.body;

    try {
        await File.find({code:code}, (err,data) => {
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

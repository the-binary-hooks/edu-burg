/*
 * Title: Model of the Post object in Edu Burg ERP
 * Description: Defines the structure of Post object to be saved in the DB
 * Author: A.K.M Fozlol Hoq
 * Created Date: 16 August, 2021
 * Last Update: 19 August, 2021
 *
 */

import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
        },
        id: {
            type: String,
            required: true,
            // type: mongoose.Types.ObjectId,
            // ref: true,
        },
        postID: {
            type: String,
            required: true,
        },
        comments: [],
        reactions: [],
        email: {
            type: String,
        },
        imageOneCode: {
            type: String,
        },
        imageTwoCode: {
            type: String,
        },
        imageThreeCode: {
            type: String,
        },
        videoCode: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Post Model
const Post = mongoose.model("Post", PostSchema);
export default Post;

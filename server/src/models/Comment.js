import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({});

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;

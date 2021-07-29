import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({

});

const Post = mongoose.model("Post", PostSchema);
export default Post;
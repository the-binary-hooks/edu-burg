import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({

});

const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;
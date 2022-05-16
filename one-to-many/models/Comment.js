import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    username: String,
    text: String,
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

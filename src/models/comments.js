import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const commentSchema =new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "userconst",
    required: true,
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
}).set('strictPopulate', false);

const CommentModel = mongoose.model("Comment", commentSchema);
export default CommentModel;

import mongoose from 'mongoose'
const { Schema, model } = mongoose
const commentSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  likes:{type:Number,required:false
  },
  dislikes:{type:Number,required:false
  },
  username: {
    type: String,
    required: true
  }
},{ timestamps: true }).set('strictPopulate', false)

const CommentModel = mongoose.model('Comment', commentSchema)
export default CommentModel

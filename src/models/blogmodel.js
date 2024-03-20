import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const blogSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  readmin: {
    type: String,
    required: false,
  },
  commentedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "userconst",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  likedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "userconst",
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
  
  views: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

blogSchema.pre("save", function (next) {
  if (this.isModified("comments")) {
    const uniqueCommentedBy = [...new Set(this.commentedBy.map(String))];
    this.commentedBy = uniqueCommentedBy.map(
      (commentedBy) => new Types.ObjectId(commentedBy)
    );
  }
  next();
}).set('strictPopulate', false);

const BlogModel =mongoose.model("Blog", blogSchema);

export default BlogModel;

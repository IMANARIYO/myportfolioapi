import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Define schema
const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true},
    image: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    languageUsed: {
        type: [String],
        required: true
    },
    projectLink: {
        type:String
    },
    startDate: {
        type: Date,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    commentedBy: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ],
      likedBy: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
      dislikedBy: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
      likes: {
        type: Number,
        default: 0
      },
      dislikes: {
        type: Number,
        default: 0
      },
     disliked:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
      views: {
        type: Number,
        default: 0
      }
}).set('strictPopulate', false);

// Create model
const Project = model('Project', projectSchema);

export default Project;

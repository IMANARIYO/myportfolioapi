import dotenv from "dotenv";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const { Schema, model } = mongoose;

// Define the service schema
const serviceSchema = new Schema({
  name: {
    type: String,
   
  },
  image: {
    type: String,
   
  },
  alt: {
    type: String,
   
  },
  title: {
    type: String,
   
  },
  description: {
    type: String,
   
  },
  overlayTitle: {
    type: String,
    
  },
  overlayDescription: {
    type: String,
    
  },
  overlayLink: {
    type: String,
   
  },
  beneficiaries: {
    type: [String],
    
  }
}, { timestamps: true }).set('strictPopulate', false);

// Create the model from the schema
const Service = model('Service', serviceSchema);

export default Service;

import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const {Schema,model} = mongoose;
const serviceSchema = new Schema({
  name: {
    type: String,
    required: false 
  },
  image: {
    type: String,
    required: false 
  },
  description: {
    type: String,
    required: false 
  },
  beneficiaries: {
    type: [String],
    default: []
  }
}).set('strictPopulate', false);
const Service = model('Service', serviceSchema);
export default Service;

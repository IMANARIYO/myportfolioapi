
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const testimonySchema = new Schema({
  name: {
    type: String,
  },
  contacts:{
    type:String
  },
  maintestimony: {
    type: String,
  },
  image: {
    type: String,
  },
  images: [{
    type: String,
    required: true
  }],
  
  rating: {
    type: String,  
  },

}, { timestamps: true }).set('strictPopulate', false);
const Testimony = model('Testimony', testimonySchema);
export default Testimony;

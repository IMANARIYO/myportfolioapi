
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const testimonySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contacts:{
    type:String
  },
  maintestimony: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  images: [{
    type: String,
    required: true
  }],
  date: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
 diseases: [{
   type: Schema.Types.ObjectId,
   ref: 'Disease',
   required: false
 }]
}).set('strictPopulate', false);
const Testimony = model('Testimony', testimonySchema);
export default Testimony;

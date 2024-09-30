import mongoose from "mongoose";

const { Schema, model } = mongoose;

const testimonySchema = new Schema({
  name: {
    type: String,
  },
  contacts: {
    type: String,
  },
  mainTestimony: {
    type: String,
  },
  image: {
    type: String,
  },
  company: {
    type: String,
  },
  testimonyMessage: {
    type: String,
  },
  images: [{
    type: String,
  }],
  professional: {
    type: String,
  },
  service: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  rating: {
    type: String,
  },
}, { timestamps: true }).set('strictPopulate', false);

const Testimony = model('Testimony', testimonySchema);
export default Testimony;

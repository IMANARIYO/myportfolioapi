import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  subject: { type: String, required: false },
  telphone: { type: String, required: false },
  message: { type: String, required: false },
  dateSent: { type: Date, default: Date.now },
  dateReplied: { type: Date, required: false },
  replaydate:{
    type:String,
    required:false
  },
  replied: { type: Boolean, required: false },
  replaymessage:{
    type:String,
    required:false
  },
  replaysubject:{
    type:String,
    required:false
  }
}, { timestamps: true }).set('strictPopulate', false);
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;

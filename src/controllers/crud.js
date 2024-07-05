import BlogModel from "../models/blogmodel.js";
import CommentModel from "../models/comments.js";
import Contact from "../models/contacts.js";
import Testimony from "../models/testmony.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { AppError, catchAsync } from "../middlewares/globaleerorshandling.js";
import { todaysdate } from "../utils/datefunctin.js";
import { sendEmail } from "../utils/emailUtility.js";
import { htmlMessageRejected, htmlMessagerespondAppointment, htmlMessagerespondContact } from "../utils/messages.js";

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const createObject = async (req, Model) => {
  let newObject = { ...req.body };
  console.log('req.body', req.body);

  if (req.files && req.files.images) {
    console.log('Images processing');
    let imagesArray = [];
    for (let index = 0; index < req.files.images.length; index++) {
      imagesArray.push((await cloudinary.uploader.upload(req.files.images[index].path)).secure_url);
    }
    newObject.images = imagesArray;
    console.log('imagesArray', imagesArray);
  }

  if (req.files && req.files.image) {
    console.log('Images processing', '____________________');
    newObject.image = (await cloudinary.uploader.upload(req.files.image[0].path)).secure_url;
  }

  if (Model === Testimony) {
    const result = await Model.create(newObject);
    if (newObject.diseases && newObject.diseases.length > 0) {
      await Disease.updateMany(
        { _id: { $in: newObject.diseases } },
        { $push: { tetsimonies: result._id } }
      );
    }
    return result;
  }

  const result = await Model.create(newObject);
  return result;
}

const handleModelOperation = (Model, operation) => {
  return catchAsync(async (req, res, next) => {
    try {
      let result;
      switch (operation) {
        case 'create':
          result = await createObject(req, Model);
          res.status(201).json({
            status: 'success',
            message: `${Model.modelName} created successfully`,
            data: result
          });
          break;
        case 'read':
          if (req.params.id) {
            result = await Model.findById(req.params.id)
              .populate('tetsimonies')
              .populate('commentedBy')
              .populate('comments')
              .populate('likedBy')
              .populate('dislikedBy')
              .populate('blog');
            
            res.status(200).json({
              status: 'success',
              message: `${Model.modelName} retrieved successfully`,
              data: result
            });
          } else {
            result = await Model.find()
              .populate('tetsimonies')
              .populate('commentedBy')
              .populate('comments')
              .populate('likedBy')
              .populate('dislikedBy')
              .populate('blog');
            
            res.status(200).json({
              status: 'success',
              message: `All ${Model.modelName} retrieved successfully`,
              data: result
            });
          }
          break;
        case 'update':
          let documentToUpdate = await Model.findById(req.params.id);
          if (!documentToUpdate) {
            throw new AppError(
              `${Model.modelName} not found with ID: ${req.params.id}`,
              404
            );
          }

          if (Model === Contact) {
            req.body.replied = true;
            req.body.replaydate = todaysdate;
            
            let contacterEmail = documentToUpdate.email;
            let contacterName = documentToUpdate.name;
            let company = "musahealth care";
            await sendEmail(
              contacterEmail,
              'from musaHealthcare contact',
              'gusubiza',
              htmlMessagerespondContact(req.body.replaysubject, req.body.replaymessage, contacterName, company)
            );
          }

          let newObject = { ...req.body };

          if (req.files && req.files.images && req.files.images.length > 0) {
            console.log('Processing multiple images');
            let imagesArray = [];
            for (let index = 0; index < req.files.images.length; index++) {
              const imgResult = await cloudinary.uploader.upload(req.files.images[index].path);
              imagesArray.push(imgResult.secure_url);
            }
            newObject.images = imagesArray;
            console.log('imagesArray', imagesArray);
          }

          if (req.files && req.files.image && req.files.image.length > 0) {
            console.log('Processing single image');
            const imgResult = await cloudinary.uploader.upload(req.files.image[0].path);
            newObject.image = imgResult.secure_url;
          }

          documentToUpdate.set(newObject);
          result = await documentToUpdate.save();

          res.status(200).json({
            status: 'success',
            message: `${Model.modelName} updated successfully`,
            data: result
          });
          break;
        case 'delete':
          let documentToDelete = await Model.findById(req.params.id);
          if (!documentToDelete) {
            throw new AppError(
              `${Model.modelName} not found with ID: ${req.params.id}`,
              404
            );
          }
          result = await Model.findByIdAndDelete(req.params.id);
          res.status(200).json({
            status: 'success',
            message: `${Model.modelName} deleted successfully`,
            data: result
          });
          break;
        default:
          throw new AppError('Invalid operation', 400);
      }
    } catch (error) {
      next(error);
    }
  });
}

export const createModelHandler = Model => handleModelOperation(Model, 'create');
export const readModelHandler = Model => handleModelOperation(Model, 'read');
export const updateModelHandler = Model => handleModelOperation(Model, 'update');
export const deleteModelHandler = Model => handleModelOperation(Model, 'delete');

import { AppError, catchAsync } from '../middlewares/globaleerorshandling.js'
import dotenv from 'dotenv'
dotenv.config()

import { v2 as cloudinary } from 'cloudinary'




import Contact from '../models/contacts.js'

import { todaysdate } from '../utils/datefunctin.js'
import Testimony from '../models/testmony.js'

import { sendEmail } from '../utils/emailUtility.js'
import { htmlMessagerespondContact, htmlMessageRejected, htmlMessagerespondAppointment } from '../utils/messages.js'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const createObject = async (req, Model) => {
  let newObject = { ...req.body }
  console.log('req.body', req.body)
  if (req.files && req.files.images) {
    console.log('Images processing ')
    console.log(newObject.image)
    let imagesArray = []
    for (let index = 0; index < req.files.images.length; index++) {
      imagesArray.push(
        (await cloudinary.uploader.upload(req.files.images[index].path))
          .secure_url
      )
    }

    newObject.images = imagesArray
    console.log('imagesArray', imagesArray)
  }
  if (req.files && req.files.image) {
    console.log('Images processing ', '____________________')
    newObject.image = (await cloudinary.uploader.upload(
      req.files.image[0].path
    )).secure_url
  }
  if (Model === Tree) {
    if (newObject.farm && newObject.farm.length > 0) {
      const farms = await Farm.find({ _id: { $in: newObject.farm } })
      if (!farms || farms.length === 0) {
        throw new AppError('Some farms not found', 404)
      }
    }
    const result = await Model.create(newObject)
    if (newObject.farm && newObject.farm.length > 0) {
      await Farm.updateMany(
        { _id: { $in: newObject.farm } },
        { $push: { trees: result._id } }
      )
    }
    return result
  }
  if (Model === Farm) {
    if (newObject.trees && newObject.trees.length > 0) {
      const listOfTrees = await Tree.find({ _id: { $in: newObject.trees } })
      if (!listOfTrees || listOfTrees.length === 0) {
        throw new AppError('Some trees not found', 404)
      }
    }
    const result = await Model.create(newObject)
    if (newObject.trees && newObject.trees.length > 0) {
      await Tree.updateMany(
        { _id: { $in: newObject.trees } },
        { $push: { farm: result._id } }
      )
    }
    return result
  }

  if (Model === Medicine) {
    const result = await Model.create(newObject)
    // Update diseases
    if (newObject.diseases && newObject.diseases.length > 0) {
      await Disease.updateMany(
        { _id: { $in: newObject.diseases } },
        { $push: { medicines: result._id } }
      )
    }
    // Update treesUsed
    if (newObject.treesUsed && newObject.treesUsed.length > 0) {
      await Tree.updateMany(
        { _id: { $in: newObject.treesUsed } },
        { $push: { medicines: result._id } }
      )
    }
    return result
  }
  if (Model === patientModel) {
    const result = await Model.create(newObject)
    // Update diseases
    if (newObject.disease && newObject.disease.length > 0) {
      await Disease.updateMany(
        { _id: { $in: newObject.diseases } },
        { $push: { patients: result._id } }
      )
    }
    return result;
  }
  if (Model === Disease) {
    const result = await Model.create(newObject)
    // Update medicines
    if (newObject.medicines && newObject.medicines.length > 0) {
      await Medicine.updateMany(
        { _id: { $in: newObject.medicines } },
        { $push: { diseases: result._id } }
      )
    }
    return result;
  }
  if (Model === Testimony) {
    const result = await Model.create(newObject)
    // Update medicines
    if (newObject.diseases && newObject.diseases.length > 0) {
      await Disease.updateMany(
        { _id: { $in: newObject.diseases } },
        { $push: { tetsimonies: result._id } }
      )
    }
    return result
  }
  // Create the object
  const result = await Model.create(newObject)
  // Update farms
  return result
}
const handleModelOperation = (Model, operation) => {
  return catchAsync(async (req, res, next) => {
    try {
      let result
      switch (operation) {
        case 'create':
          try {
            result = await createObject(req, Model)
            res.status(201).json({
              status: 'success',
              message: `${Model.modelName} created successfully`,
              data: result
            })
          } catch (error) {
            next(error)
            return
          }
          break
        case 'read':
          if (req.params.id) {
            result = await Model.findById(req.params.id)
            .populate('farm')
            .populate('medicines')
            .populate('vaccinations')
            .populate('trees')
            .populate('treesUsed')
            .populate('tetsimonies')
            .populate('patients')
            .populate('vaccinations')
            .populate('disease')
            .populate('diseases')
            res.status(200).json({
              status: 'success',
              message: `${Model.modelName} retrieved successfully`,
              data: result
            })
          } else {
            result = await Model.find()
              .populate('farm')
              .populate('medicines')
              .populate('vaccinations')
              .populate('trees')
              .populate('treesUsed')
              .populate('tetsimonies')
              .populate('patients')
              .populate('vaccinations')
              .populate('disease')
              .populate('diseases')
            res.status(200).json({
              status: 'success',
              message: `All ${Model.modelName} retrieved successfully`,
              data: result
            })
          }
          break
        case 'update':
          let documentToUpdate = await Model.findById(req.params.id)
          if (!documentToUpdate) {
            throw new AppError(
              `${Model.modelName} not found with ID: ${req.params.id}`,
              404
            )
          }
          if (Model === Contact) {
            let date = todaysdate
            req.body.replaydate = date
            console.log(req.body.replaydate)
            req.body.replied = true
            let contacterEmail = documentToUpdate.email
            let contactername = documentToUpdate.name
            console.log('----------', contacterEmail)
           let gender="male"
            let  name="baptiste"
            let company="musahealth care"
            await sendEmail(
              contacterEmail,
              'from musaHealthcare contact',
            'gusubiza',
            htmlMessagerespondContact(req.body.replaysubbject,req.body.replaymessage,  name,company)
            )
          }
          if (Model === Appointment) {
            let name = documentToUpdate.Name;
            let email = documentToUpdate.Email;
            let scheduleddate = req.body.scheduleddate;
            let response = "";
          console.log("-------------------------",req.body.scheduleddate)
            if (!req.body.response) {
              response = "Appointment has been accepted";
            } else {
              response = req.body.response; 
            }
            await sendEmail(
              email,
              ' MUsa health cares Appointment Confirmation', 
              response, 
              htmlMessagerespondAppointment(response, `Your appointment is scheduled for ${scheduleddate}.`, name, "Musa Health Care") // Generate HTML message
            );
          }
          
          documentToUpdate.set(req.body)
          result = await documentToUpdate.save()
          res.status(200).json({
            status: 'success',
            message: `${Model.modelName} updated successfully`,
            data: result
          })
          break
        case 'delete':
          let documentToDelete = await Model.findById(req.params.id)
          if (!documentToDelete) {
            throw new AppError(
              `${Model.modelName} not found with ID: ${req.params.id}`,
              404
            )
          }
          result = await Model.findByIdAndDelete(req.params.id)
          res.status(200).json
          ({
            status: 'success',
            message: `${Model.modelName} deleted successfully`,
            data: result
          })
          break
        default:
          throw new AppError('Invalid operation', 400)
      }
    } catch (error) {
      next(error)
    }
  })
}
export const createModelHandler = Model => {
  return handleModelOperation(Model, 'create')
}
export const readModelHandler = Model => {
  return handleModelOperation(Model, 'read')
}
export const updateModelHandler = Model => {
  return handleModelOperation(Model, 'update')
}
export const deleteModelHandler = Model => {
  return handleModelOperation(Model, 'delete')
}

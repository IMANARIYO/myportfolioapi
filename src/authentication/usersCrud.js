import { User } from '../models/users.js'
import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()

    if (users.length === 0) {
      res.status(404).json({ success: false, error: 'No users found' })
    } else {
      res
        .status(200)
        .json({
          success: true,
          message: 'Users retrieved successfully',
          data: users
        })
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}
export const deleteUserById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await User.findByIdAndDelete(id)
    if (!result) {
      res.status(404).json({ success: false, error: 'User not found' })
    } else {
      res
        .status(200)
        .json({ success: true, message: 'User deleted successfully' })
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}

export const updateUserById = async (req, res) => {
  const { id } = req.params
  const updates = req.body
  if (req.files && req.files.image) {
    console.log('Images processing ', '____________________')
    updates.image = (await cloudinary.uploader.upload(
      req.files.image[0].path
    )).secure_url
  }
 

  try {
    const result = await User.findByIdAndUpdate(id, updates, { new: true })
    await result.save()
    if (!result) {
      res.status(404).json({ success: false, error: 'User not found' })
    } else {
      res
        .status(200)
        .json({
          success: true,
          message: 'User updated successfully',
          data: result
        })
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}
export const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    if (!user) {
      res.status(404).json({ success: false, error: 'User not found' })
    } else {
      res
        .status(200)
        .json({
          success: true,
          message: 'User retrieved successfully',
          data: user
        })
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}

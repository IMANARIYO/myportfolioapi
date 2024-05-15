import dotenv from "dotenv";
import cloudinary from "cloudinary";
dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const uploadCloudinary = async file => {
  try {
    const result = await cloudinary.v2.uploader.upload(file.path, {
      folder: "imagesfolder",
      allowed_formats: ["jpg", "jpeg", "png", "gif", "pdf", "js","docx"] // Add "js" to allow JavaScript files
    });
    return result.secure_url;
  } catch (error) {
    console.log("in utils cloudinary", error.message, error);
    throw error; 
  }
};

export default uploadCloudinary;
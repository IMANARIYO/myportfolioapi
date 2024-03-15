import multer from "multer";
import fs from "fs";
import path from "path";
async function ensureDir(directory) {
  try {
    await fs.promises.access(directory, fs.constants.F_OK);
  } catch (e) {
    await fs.promises.mkdir(directory, { recursive: true });
    console.log("errors",e)
  }
}

export const storage = multer.diskStorage({
  destination(req, files, cb) {
 
    const dir = "images_container";
  ensureDir(dir);
    cb(null, "images_container");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
const upload = multer({ storage: storage });
export const uploaded = upload.fields([
  { name: "picture", maxCount: 1 },
  { name: "image", maxCount: 4 },
  { name: "images", maxCount: 20 } 
]);



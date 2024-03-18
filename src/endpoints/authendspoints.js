import { login,signup,verifyOTPAndUpdatePassword,generateAndSendOTP,changepassword, getAllUsers,deleteUserById,updateUserById, getUserById, } from "../authentication/index.js";
import  express from "express";
import { verifyingtoken } from "../utils/jwtfunctions.js";
import { uploaded } from "../utils/multer.js";
const authRouter = express.Router();
authRouter.post("/login", login);
authRouter.post("/signup",uploaded, signup);
authRouter.post("/reset", verifyOTPAndUpdatePassword);
authRouter.post("/forget", generateAndSendOTP);
// authRouter.use(verifyingtoken)
authRouter.delete("/deleteUserById/:id", deleteUserById);
authRouter.patch("/updateUserById/:id",uploaded, updateUserById);
authRouter.get("/getAllUsers", getAllUsers);
authRouter.get("/getUserById/:id", getUserById);
authRouter.post("/change", changepassword);
export default authRouter;

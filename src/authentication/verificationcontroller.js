// verificationController.js

import cron from "node-cron";
import { userconst } from '../models/users.js'
import { catchAsync } from "../middlewares/globaleerorshandling.js";
const tokenExpirationTime = 24 * 60 * 60 * 1000;

export const verifyEmail = catchAsync(async (req, res, next) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ message: "Token is required for email verification." });
  }
  const user = await userconst.findOne({ otp:token });
  if (!user) {
    return res.status(404).json({ message: "Invalid token. User not found. for contoller" });
    console.log("token was",token);
  }
  const receivedOTP = token;
  const storedOTP = user.otp;
  console.log("storedOTP-----",storedOTP)
console.log("receivedOTP-----",receivedOTP)
  let validOTP = isOTPValid(storedOTP, receivedOTP, user.otpExpiresAt, res); // Assign the result of isOTPValid to validOTP
console.log("____________________________isOTPValid_____________",validOTP)
  if (validOTP===true) {
    console.log("storedOTP-----",storedOTP)
console.log("receivedOTP-----",receivedOTP)
console.log("user.otpExpiresAt-----",user.otpExpiresAt)
console.log("the current date is-----",)
    // Mark the user as verified and clear OTP details
    user.verified = true;
    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    res.status(200).json({ message: "Email verification successful. You can now login." });
  }
});

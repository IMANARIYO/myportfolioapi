import { userconst } from '../models/users.js'
import { sendEmail } from '../utils/emailUtility.js'
import { generateOTP } from '../utils/passwordfunctions.js'
import { passHashing } from '../utils/passwordfunctions.js'
import { isOTPValid } from '../utils/passwordfunctions.js'


export const generateAndSendOTP = async (req, res) => {
  const otp = generateOTP().code
const expiresAt=generateOTP().expiresAt;
  const userEmail = req.body.email
  const user = await userconst.findOne({ email: userEmail })
  if (!user) {
    return res
      .status(404)
      .json({
        message: `No user with email ${userEmail} found. Please use a correct registered email if you have ever signed up.`
      })
  }
  user.otp = otp;
  user.otpExpiresAt=expiresAt;
  await user.save()
  await sendEmail(
    user.email,
    'Password OTP Code Reset',
    'Password Resetting!',
    `Use this ${otp} to change your password.  it is valid for five minutes  it will expire at ${expiresAt}`
  )

  return res
    .status(200)
    .json({
      message:
        'OTP sent successfully!! you can go to youe email and came back with it.'
    })
}


export const verifyOTPAndUpdatePassword = async (req, res) => {
  const userEmail = req.body.email
  const user = await userconst.findOne({ email: userEmail })
  if (!user) {
    return res
      .status(404)
      .json({
        message: `No user with email ${userEmail} found. Please use a correct registered email if you have ever signed up.`
      })
  }

  const receivedOTP = req.body.otp
  const storedOTP = user.otp;
  console.log("the  accompanied information---------------",user.OtpExpiresAt,"-----------",storedOTP)
  let validotp = isOTPValid(storedOTP, receivedOTP,user.otpExpiresAt,res)
  if (validotp) {
    const newPassword = req.body.newpassword;
    console.log("the new requested pass word  in  rese is---",req.body)
    const hashedPassword = await passHashing(newPassword)

    user.password = hashedPassword
    user.otp = undefined;
    user.otpExpiresAt=undefined;
    await user.save()
    return res.status(200).json({ message: 'Password updated successfully.' })
  }
}

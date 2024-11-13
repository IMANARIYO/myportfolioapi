import nodemailer from "nodemailer";

//import { isAdmin } from "../src/middlewares/index.js";
export const sendEmail = async (to,subject,textContent, htmlContent,adminEmail) => {
  try {

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: textContent,
      html: htmlContent 
    };

    if(adminEmail && isAdmin()){
   let mailOptions = {
      from: adminEmail,
      to: to,
      subject: subject,
      text: textContent,
      html: htmlContent 
    };
}
 await transporter.sendMail(mailOptions);

  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

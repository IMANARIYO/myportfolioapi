import { userconst } from '../models/users.js'
import { passComparer,passHashing}from"../utils/passwordfunctions.js"
export const changepassword=async (req,res,next)=>{
try{
    const { currentpassword, newpassword } = req.body;
const { userId,userEmail } = req;
const user=await userconst.findById(userId)
console.log("the passed useId",userId)
console.log(user);
if (!user) {
  return res.status(404).json({ message: "User not found" });
}
        let isPasswordCorrect=await passComparer(currentpassword,user.password)
if (!isPasswordCorrect) {
  return res.status(401).json({
    message: "the currentpassword is wrong"
  });
}
        let hashedPassword=await passHashing(newpassword);
        user.password=hashedPassword;
        user.save();
        res.status(200).json({message:"password changed successfuly"})
        

}catch(err){
    console.log("catch:",err.message,err.name)
}

}

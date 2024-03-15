import jwt from "jsonwebtoken";
export const tokengenerating = payload => {
    console.log("-----the    process.env.JWT_EXP is ", process.env.JWT_EXP)
  let token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP
  });
  return token;
};
export const  verifyingtoken=(req,res,next)=> 
{
try{
let auth = req.headers.authorization;
 let token = auth?.split( " ")[1];
if(!token){
       return res.status(401).json({
           message:"no acess token  provided",
       });}      
       jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
           if(err){
        return res.status(401).json({
            messagefromverifytoken:err.message,
        });
    }
    req.user=decoded.user
    console.log("am from    verifying token",req.user.fullNames)
    req.userId=decoded._id;
    req.userEmail=decoded.email
    next();
}
);
}catch(err){
    res.status(500).json({message:`internal server from verify token error${err.message}`},);
}
}






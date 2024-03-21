import express from"express"


import authRouter from "./authendspoints.js";
import contactRouter from "./contactsendpoints.js";
import testimonyRouter from "./testimonyendspoints.js";
import serviceRouter from "./serviceendPoints.js";
import blogRouter from "./blogendspoints.js";
import commentRouter from "./commentsEndpoints.js";

const mainRouter=express.Router();
mainRouter.use('/auth',authRouter)
mainRouter.use('/contact',contactRouter)
mainRouter.use('/service',serviceRouter)
mainRouter.use('/testimony',testimonyRouter)
mainRouter.use('/Blogs',blogRouter)
mainRouter.use('/comments',commentRouter)
export default mainRouter;
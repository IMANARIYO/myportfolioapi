import authRouter from "./authendspoints.js";
import blogRouter from "./blogendspoints.js";
import commentRouter from "./commentsEndpoints.js";
import contactRouter from "./contactsendpoints.js";
import projectRouter from "./projectsEndpoints.js";
import serviceRouter from "./serviceendPoints.js";
import testimonyRouter from "./testimonyendspoints.js";

import express from"express"



const mainRouter=express.Router();
mainRouter.use('/auth',authRouter)
mainRouter.use('/contact',contactRouter)
mainRouter.use('/service',serviceRouter)
mainRouter.use('/testimony',testimonyRouter)
mainRouter.use('/Blogs',blogRouter)
mainRouter.use('/comments',commentRouter)
mainRouter.use('/projects',projectRouter)
export default mainRouter;
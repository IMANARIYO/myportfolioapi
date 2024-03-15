import express from"express"


import authRouter from "./authendspoints.js";
import contactRouter from "./contactsendpoints.js";

import testimonyRouter from "./testimonyendspoints.js";
import serviceRouter from "./serviceendPoints.js";
const mainRouter=express.Router();
mainRouter.use('/auth',authRouter)
mainRouter.use('/contact',contactRouter)
mainRouter.use('/service',serviceRouter)
mainRouter.use('/testimony',testimonyRouter)

export default mainRouter;
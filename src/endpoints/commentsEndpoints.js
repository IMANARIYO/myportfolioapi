import express from 'express';
import * as commentControllers from '../controllers/commentcontrollers.js';
import { verifyingtoken } from '../utils/jwtfunctions.js';


const commentRouter = express.Router();


commentRouter.get('/:blogId', commentControllers.getComments);
commentRouter.use(verifyingtoken);
commentRouter.post('/:blogId', commentControllers.createComment);
commentRouter.patch('/:commentId', commentControllers.updateComment);
commentRouter.delete('/:commentId', commentControllers.deleteComment);

export default commentRouter;

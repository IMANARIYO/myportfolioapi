import express from 'express';
import * as commentControllers from '../controllers/commentcontrollers.js';

const commentRouter = express.Router();


commentRouter.post('/comments/:blogId', commentControllers.createComment);
commentRouter.get('/comments/:blogId', commentControllers.getComments);
commentRouter.patch('/comments/:commentId', commentControllers.updateComment);
commentRouter.delete('/comments/:commentId', commentControllers.deleteComment);

export default commentRouter;

import express from "express";
import CommentModel from "../models/comments.js";
import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";

const commentRouter = express.Router();

commentRouter.post('/createComment', createModelHandler(CommentModel));
commentRouter.get('/getComment', readModelHandler(CommentModel));
commentRouter.get('/getComment/:id', readModelHandler(CommentModel));
commentRouter.put('/updateComment/:id', updateModelHandler(CommentModel));
commentRouter.delete('/deleteComment/:id', deleteModelHandler(CommentModel));

export default commentRouter;

import express from "express";
import BlogModel from "../models/blogmodel.js";
import { uploaded } from "../utils/multer.js";

import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import { dislikeBlog, likeBlog } from "../controllers/likeOrdislikeblog.js";
import { verifyingtoken } from "../utils/jwtfunctions.js";

const blogRouter = express.Router();

blogRouter.post('/createBlog', uploaded, createModelHandler(BlogModel));
blogRouter.get('/getBlogs', readModelHandler(BlogModel));
blogRouter.get('/getBlog/:id', readModelHandler(BlogModel));
blogRouter.put('/updateBlog/:id', uploaded, updateModelHandler(BlogModel));
blogRouter.delete('/deleteBlog/:id', deleteModelHandler(BlogModel));
// blogRouter.use(verifyingtoken);
blogRouter.post('/likeBlogs/:blogId',likeBlog);
blogRouter.post('/dislikeBlogs/:blogId',dislikeBlog);
export default blogRouter;

import Testimony from "../models/testmony.js";
 import express from"express"
import { uploaded } from "../utils/multer.js";
import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
const testimonyRouter = express.Router();
testimonyRouter.post('/createTestimony', uploaded, createModelHandler(Testimony));
testimonyRouter.get('/getTestimony', readModelHandler(Testimony));
testimonyRouter.get('/getTestimony/:id', readModelHandler(Testimony));
testimonyRouter.put('/updateTestimony/:id', uploaded, updateModelHandler(Testimony));
testimonyRouter.delete('/deleteTestimony/:id', deleteModelHandler(Testimony));
export default testimonyRouter;

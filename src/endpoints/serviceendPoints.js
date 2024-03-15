import express from 'express';
import Service from '../models/services.js';
import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import { uploaded } from '../utils/multer.js';

const createService = createModelHandler(Service);
const readServices = readModelHandler(Service);
const updateService = updateModelHandler(Service);
const deleteService = deleteModelHandler(Service);

const serviceRouter = express.Router();

serviceRouter.post('/createService',uploaded,createService);
serviceRouter.get('/readServices', readServices);
serviceRouter.get('/readServices/:id', readServices);
serviceRouter.put('/updateService/:id',uploaded,updateService);
serviceRouter.delete('/deleteService/:id', deleteService);

export default serviceRouter;


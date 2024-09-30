import Project from "../models/projects.js";
import express from "express";
import { createModelHandler, deleteModelHandler, readModelHandler, updateModelHandler } from "../controllers/crud.js";
import { uploaded } from "../utils/multer.js";

const projectRouter = express.Router();

// Create a new project
projectRouter.post('/', uploaded,createModelHandler(Project));

// Get a project by ID
projectRouter.get('/:id', readModelHandler
    (Project));

// Get all projects
projectRouter.get('/', readModelHandler(Project));

// Update a project by ID
projectRouter.put('/:id',uploaded,updateModelHandler(Project));

// Delete a project by ID
projectRouter.delete('/:id', deleteModelHandler(Project));

export default projectRouter;

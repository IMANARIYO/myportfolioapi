import Contact from "../models/contacts.js";
import express from"express"
import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
const contactRouter = express.Router();
// Define endpoint handlers
const createContact = createModelHandler(Contact);
const readContacts = readModelHandler(Contact);
const updateContact = updateModelHandler(Contact);
const deleteContact = deleteModelHandler(Contact);

// Define your Express routes for contacts
contactRouter.post('/createContact',createContact);
contactRouter.get('/getAllContacts',readContacts);
contactRouter.get('/getContactById/:id',readContacts);
contactRouter.put('/replaycontact/:id',updateContact);
contactRouter.delete('/deleteContact/:id',deleteContact);
export default contactRouter;

import dotenv from "dotenv";
dotenv.config();

import yaml from "yamljs";
import twilio from "twilio";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import mainRouter from "./src/endpoints/index.js";
import { badroutes,errosingeneral } from "./src/middlewares/globaleerorshandling.js";
import swaggerUi from 'swagger-ui-express';
const app = express();
app.use(express.json());
app.use(cors());
const swaggerDocument = yaml.load("./documentationfile.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/",mainRouter)
app.use('*',badroutes)
app.use(errosingeneral)
app.use((req, res) => {
  res.status(404).json({ message: "Welcome to the API! This route is not found." });
});
async function sendSms() {
  const client = new twilio(process.env.twilioaccountSid, process.env.twilioAuthToken);
  return client.messages
    .create({ body: 'Hey this is themes', from:'+19292426206', to: '+250787795163' })
    .then(message => console.log(message))
    .catch(err => console.error(err));
}
  
app.use(bodyParser.json());
mongoose
  .connect(process.env.DB_CONNECTION_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
//sendSms();
app.listen(process.env.PORT, () => {
  console.log(`Server is v running on the port http://localhost:${process.env.PORT}`);
});


import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mainRouter from "./src/endpoints/index.js";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import twilio from "twilio";
import yaml from "yamljs";
import { badroutes, errosingeneral } from "./src/middlewares/globaleerorshandling.js";

dotenv.config();

const app = express();

// ✅ Secure CORS setup (production + local dev)
const allowedOrigins = [
  "https://imanariyo-portfolio-web.vercel.app", // production frontend
  "http://localhost:3000", // local development
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());

// Swagger setup
const swaggerDocument = yaml.load("./documentationfile.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Main routes
app.use("/", mainRouter);

// Default 404 route
app.use((req, res) => {
  res.status(404).json({ message: "Welcome to the API! This route is not found." });
});

// Global error handling
app.use("*", badroutes);
app.use(errosingeneral);

// Twilio test function
async function sendSms() {
  const client = new twilio(process.env.twilioaccountSid, process.env.twilioAuthToken);
  try {
    const message = await client.messages.create({
      body: "Hey this is themes",
      from: "+19292426206",
      to: "+250787795163",
    });
    console.log(message);
  } catch (err) {
    console.error(err);
  }
}

// Database connection
mongoose
  .connect(process.env.DB_CONNECTION_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ Error connecting to MongoDB:", error));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}/api-docs`);
});

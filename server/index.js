import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import adminAuth from "./routes/adminAuth.js";
import { authenticate } from "./middlewares/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(express.json());

// Fix __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the Vite build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use("/api/admin", adminAuth);

app.use("/api/admin/dashboard", authenticate, adminAuth);

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

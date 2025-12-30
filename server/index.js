import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import adminAuth from "./routes/adminAuth.js";
import { authenticate } from "./middlewares/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AllRoutes from "./routes/AllRoutes.js";
import cors from "cors";
import useragent from "express-useragent";
import { logVisitor } from "./middlewares/Log.js";
import cron from "node-cron";
import Visitor from "./models/Visitor.js";

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

app.use(cors());
app.use(express.json());
app.use(useragent.express());
app.use(logVisitor);

// Fix __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the Vite build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use("/api", AllRoutes);

app.use("/api/admin", adminAuth);

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // Weekly prune job: runs every Sunday at 00:00 (server time)
  // - Removes logs older than VISITOR_RETENTION_DAYS (default 7)
  // - Also removes logs older than VISITOR_YEARLY_RETENTION_DAYS (default 365) to ensure previous-year logs are cleaned up
  cron.schedule('0 0 * * 0', async () => {
    try {
      const days = parseInt(process.env.VISITOR_RETENTION_DAYS || '7', 10);
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      const result = await Visitor.deleteMany({ time: { $lt: cutoff } });
      console.log(`Weekly prune: deleted ${result.deletedCount} visitor logs older than ${days} days`);

      // Yearly prune: ensure previous year's logs are removed as well
      const yearlyDays = parseInt(process.env.VISITOR_YEARLY_RETENTION_DAYS || '365', 10);
      if (yearlyDays > days) {
        const cutoffYear = new Date();
        cutoffYear.setDate(cutoffYear.getDate() - yearlyDays);
        const yearResult = await Visitor.deleteMany({ time: { $lt: cutoffYear } });
        console.log(`Yearly prune: deleted ${yearResult.deletedCount} visitor logs older than ${yearlyDays} days`);
      }
    } catch (err) {
      console.error('Prune job error:', err);
    }
  });
});

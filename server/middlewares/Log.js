import useragent from "express-useragent";
import mongoose from "mongoose";

export function logVisitor(req, res, next) {
  const visit = {
    ip: req.ip,
    path: req.originalUrl,
    browser: req.useragent?.browser || "Unknown",
    os: req.useragent?.os || "Unknown",
    time: new Date(),
  };

  try {
    const db = mongoose.connection.db;

    // Check if DB is ready
    if (!db) {
      console.warn("DB not ready, skipping visitor log.");
      return next();
    }

    // Optionally skip logging API routes
    if (!req.originalUrl.startsWith("/api")) {
      db.collection("visitors").insertOne(visit).catch((err) => {
        console.error("Failed to log visitor:", err);
      });
    }
  } catch (err) {
    console.error("Visitor logging failed:", err);
  }

  next();
}

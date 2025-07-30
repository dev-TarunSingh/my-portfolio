// middlewares/log.js
import useragent from "express-useragent";
import mongoose from "mongoose";

export function logVisitor(req, res, next) {
  const visit = {
    ip: req.ip,
    path: req.originalUrl,
    browser: req.useragent.browser,
    os: req.useragent.os,
    time: new Date(),
  };

  try {
    const db = mongoose.connection.db;
    // Optionally skip logging API routes
    if (!req.originalUrl.startsWith("/api")) {
      db.collection("visitors").insertOne(visit);
    }
  } catch (err) {
    console.error("Visitor logging failed:", err);
  }

  next();
}

// middlewares/log.js
import useragent from "express-useragent";
import Visitor from "../models/Visitor.js";

export function logVisitor(req, res, next) {
  const visit = {
    ip: req.ip,
    path: req.originalUrl,
    browser: req.useragent?.browser || "Unknown",
    os: req.useragent?.os || "Unknown",
    time: new Date(),
  };

  // Optionally skip API routes
  if (!req.originalUrl.startsWith("/api")) {
    Visitor.create(visit).catch((err) => {
      console.error("Failed to log visitor:", err);
    });
  }

  next();
}

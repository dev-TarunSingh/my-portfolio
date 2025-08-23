// middlewares/log.js
import Visitor from "../models/Visitor.js";

export async function logVisitor(req, res, next) {
  try {
    // Skip static files, API calls, favicon, robots.txt
    const ignorePaths = ["/api", "/assets", "/favicon.ico", "/robots.txt"];
    if (ignorePaths.some((p) => req.originalUrl.startsWith(p))) return next();

    // Get client IP
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.ip;

    // Skip local/dev IPs
    if (ip === "::1" || ip.startsWith("192.168.") || ip.startsWith("10.")) {
      return next();
    }

    // Log visit every time
    await Visitor.create({
      ip,
      path: req.originalUrl,
      browser: req.useragent?.browser || "Unknown",
      os: req.useragent?.os || "Unknown",
      time: new Date(),
    });
  } catch (err) {
    console.error("Failed to log visitor:", err);
  }

  next();
}

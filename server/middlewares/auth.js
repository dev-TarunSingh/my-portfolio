// middleware/auth.js
import dotenv from "dotenv";
dotenv.config();

// Prefer JWT_SECRET; fall back to SECRET for compatibility
const SECRET = process.env.JWT_SECRET || process.env.SECRET;
if (!SECRET) console.warn("Auth middleware: JWT secret not set (JWT_SECRET/SECRET)");

import jwt from 'jsonwebtoken';

export function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    console.error('Auth verify error:', err);
    res.status(403).json({ message: "Forbidden" });
  }
}

// utils/jwt.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Prefer `JWT_SECRET`, fall back to `SECRET` for backward compatibility
const SECRET = process.env.JWT_SECRET || process.env.SECRET;
if (!SECRET) {
  console.warn("JWT secret is not set. Token generation/verification will fail unless you set JWT_SECRET in .env");
}

export function generateToken(admin) {
  if (!SECRET) throw new Error("JWT secret not configured");
  return jwt.sign({ id: admin._id, username: admin.username }, SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token) {
  if (!SECRET) throw new Error("JWT secret not configured");
  return jwt.verify(token, SECRET);
}

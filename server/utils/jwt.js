// utils/jwt.js
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret"; // store in .env

export function generateToken(admin) {
  return jwt.sign({ id: admin._id, username: admin.username }, SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

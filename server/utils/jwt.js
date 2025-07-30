// utils/jwt.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.SECRET; // store in .env

export function generateToken(admin) {
  return jwt.sign({ id: admin._id, username: admin.username }, SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

// routes/adminAuth.js
import express from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import { showDashboard } from "../controller/adminController.js";
import { generateToken } from "../utils/jwt.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

// Register (one-time setup, then disable/remove route)
router.post("/signup", async (req, res) => {
  console.log("Registering admin:", req.body);
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const admin = new Admin({ username, password: hash });
  await admin.save();
  res.json({ message: "Admin registered" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(admin);
  res.json({ token });
});

router.get("/dashboard", authenticate, showDashboard);

export default router;

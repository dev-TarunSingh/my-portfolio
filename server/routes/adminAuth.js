// routes/adminAuth.js
import express from "express";
import { login, signup, showDashboard } from "../controller/adminController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

// Register (one-time setup, then disable/remove route)
router.post("/signup", signup);

// Login
router.post("/login", login);

router.get("/dashboard", authenticate, showDashboard);

export default router;

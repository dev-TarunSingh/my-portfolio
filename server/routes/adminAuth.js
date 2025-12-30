// routes/adminAuth.js
import express from "express";
import { login, signup, showDashboard, pruneVisitors, adminGetBlogs, adminDeleteBlog, adminDeleteComment } from "../controller/adminController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

// Register (one-time setup, then disable/remove route)
router.post("/signup", signup);

// Login
router.post("/login", login);

router.get("/dashboard", authenticate, showDashboard);

// Admin blog management
router.get("/blogs", authenticate, adminGetBlogs);
router.delete("/blogs/:id", authenticate, adminDeleteBlog);
router.delete("/blogs/:blogId/comments/:commentId", authenticate, adminDeleteComment);

// Admin-triggered prune endpoint to delete visitors older than `days` (default 7)
router.delete("/prune-visitors", authenticate, pruneVisitors);

export default router;

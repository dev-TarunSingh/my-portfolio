import express from "express";
import { addBlog, blogs, addComment, deleteComment } from "../controller/allControllers.js";
import { visitorsPerDay, visitorsWeek } from "../controller/adminController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/blogs", blogs);

router.post("/addblog", authenticate, addBlog);

router.post("/add-comment", addComment);

router.delete("/delete-comment/:blogId/:commentId", deleteComment);

router.get("/visitors-per-day", authenticate, visitorsPerDay);
router.get("/visitors-week", authenticate, visitorsWeek);
router.get("/visitors-week/raw", authenticate, async (req, res) => {
  // Optional raw endpoint: fetch visitor docs for last `days` (default 7)
  try {
    const days = parseInt(req.query.days || "7", 10);
    const since = new Date();
    since.setDate(since.getDate() - (days - 1));
    const visitors = await (await import("../models/Visitor.js")).default.find({ time: { $gte: since } }).sort({ time: -1 });
    res.status(200).json({ success: true, visitors });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;

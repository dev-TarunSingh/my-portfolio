import express from "express";
import { addBlog, blogs, addComment, deleteComment } from "../controller/allControllers.js";
import { visitorsPerDay } from "../controller/adminController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/blogs", blogs);

router.post("/addblog", authenticate, addBlog);

router.post("/add-comment", addComment);

router.delete("/delete-comment/:blogId/:commentId", deleteComment);

router.get("/visitors-per-day", authenticate, visitorsPerDay);

export default router;

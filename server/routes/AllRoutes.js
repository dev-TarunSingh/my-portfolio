import express from "express";
import { addBlog, blogs } from "../controller/allControllers.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/blogs", blogs);

router.post("/addblog", authenticate, addBlog);

export default router;

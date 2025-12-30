import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";
import Visitor from "../models/Visitor.js";
import Blog from "../models/Blog.js";

export const signup = async (req, res) => {
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
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      console.warn('Admin login failed - user not found:', username);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      console.warn('Admin login failed - wrong password for:', username);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(admin);
    res.json({ token });
  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
};

export const showDashboard = async (req, res) => {
  try {
    // Get all visitors
    const visitors = await Visitor.find().sort({ time: -1 });

    // Total visitor count
    const totalVisitors = visitors.length;

    // Get all blogs
    const blogs = await Blog.find().sort({ createdAt: -1 });

    // Total views and likes across all blogs
    const totalViews = blogs.reduce((sum, blog) => sum + blog.Views, 0);
    const totalLikes = blogs.reduce((sum, blog) => sum + blog.Likes, 0);

    res.status(200).json({
      success: true,
      totalVisitors,
      visitorDetails: visitors,
      totalBlogs: blogs.length,
      totalViews,
      totalLikes,
      blogs,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const visitorsPerDay = async (req, res) => {
  try {
    const visitors = await Visitor.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$time" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    res.status(200).json({ success: true, data: visitors });
  } catch (error) {
    console.error("Visitors Per Day Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Return detailed visitors and per-day counts for the last `days` (default 7)
export const visitorsWeek = async (req, res) => {
  try {
    const days = parseInt(req.query.days || "7", 10);
    const since = new Date();
    since.setDate(since.getDate() - (days - 1)); // include today and previous days

    // Detailed visitors for the period
    const visitors = await Visitor.find({ time: { $gte: since } }).sort({ time: -1 });

    // Aggregate per day for the same range
    const perDay = await Visitor.aggregate([
      { $match: { time: { $gte: since } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$time" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Fill missing days with 0 counts to ensure chart always has `days` values
    const labels = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      labels.push(d.toISOString().slice(0, 10));
    }

    const perDayMap = perDay.reduce((acc, cur) => {
      acc[cur._id] = cur.count;
      return acc;
    }, {});

    const perDayFilled = labels.map((label) => ({ _id: label, count: perDayMap[label] || 0 }));

    res.status(200).json({ success: true, visitors, perDay: perDayFilled });
  } catch (error) {
    console.error("Visitors Week Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete visitors older than `days` (default 7)
export const pruneVisitors = async (req, res) => {
  try {
    const days = parseInt(req.body.days || req.query.days || "7", 10);
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    const result = await Visitor.deleteMany({ time: { $lt: cutoff } });
    res.status(200).json({ success: true, deleted: result.deletedCount });
  } catch (error) {
    console.error("Prune Visitors Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Admin blog management endpoints
export const adminGetBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (err) {
    console.error('Admin get blogs error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const adminDeleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.status(200).json({ success: true, message: 'Blog deleted' });
  } catch (err) {
    console.error('Delete blog error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const adminDeleteComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    const idx = blog.comments.findIndex(c => c._id.toString() === commentId);
    if (idx === -1) return res.status(404).json({ success: false, message: 'Comment not found' });

    blog.comments.splice(idx, 1);
    await blog.save();
    res.status(200).json({ success: true, message: 'Comment deleted', blog });
  } catch (err) {
    console.error('Delete comment error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

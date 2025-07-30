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
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(admin);
  res.json({ token });
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

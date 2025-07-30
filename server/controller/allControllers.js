import Blog from "../models/Blog.js";

export const blogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

export const addBlog = async (req, res) => {
  try {
    const { title, content, coverImage, author } = req.body;

    // Validate required fields
    if (!title || !content || !coverImage || !author) {
      return res.status(400).json({
        success: false,
        message:
          "All fields (title, content, coverImage, author) are required.",
      });
    }

    // Create new blog
    const newBlog = new Blog({
      title,
      content,
      coverImage,
      author,
    });

    const savedBlog = await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog: savedBlog,
    });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

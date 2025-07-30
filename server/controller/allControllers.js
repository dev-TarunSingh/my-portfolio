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

export const addComment = async (req, res) => {
  try {
    const { blogId, name, comment } = req.body;

    if (!blogId || !name || !comment) {
      return res.status(400).json({
        success: false,
        message: "blogId, name, and comment are required.",
      });
    }

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    blog.comments.push({ name, comment });
    await blog.save();

    res.status(201).json({ success: true, message: "Comment added", blog });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    const commentIndex = blog.comments.findIndex(
      (c) => c._id.toString() === commentId
    );
    if (commentIndex === -1) {
      return res.status(404).json({ success: false, message: "Comment not found" });
    }

    blog.comments.splice(commentIndex, 1);
    await blog.save();

    res.status(200).json({ success: true, message: "Comment deleted", blog });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

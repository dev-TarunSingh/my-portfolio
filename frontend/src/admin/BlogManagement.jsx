import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const BlogManagement = () => {
  const { admin } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    coverImage: "",
    author: "",
  });

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleAddBlog = async () => {
    try {
      const res = await axios.post("/api/addblog", newBlog, {
        headers: { Authorization: `Bearer ${admin?.token}` },
      });
      if (res.data.success) {
        alert("Blog added successfully");
        setNewBlog({ title: "", content: "", coverImage: "", author: "" });
        fetchBlogs();
      } else {
        alert("Failed to add blog");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Error adding blog");
    }
  };

  if (loading) {
    return <div>Loading Blogs...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Blog Management</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Add New Blog</h3>
        <div className="flex flex-col max-w-md space-y-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBlog.title}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            value={newBlog.coverImage}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBlog.author}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <textarea
            name="content"
            placeholder="Content"
            value={newBlog.content}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
            rows={5}
          />
          <button
            onClick={handleAddBlog}
            className="bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
          >
            Add Blog
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">All Blogs</h3>
        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <BlogPost key={blog._id} blog={blog} admin={admin} />
          ))
        )}
      </section>
    </div>
  );
};

const BlogPost = ({ blog, admin }) => {
  const [comments, setComments] = useState(blog.comments || []);
  const [commentData, setCommentData] = useState({ name: "", comment: "" });

  const fetchComments = async () => {
    try {
      const res = await axios.get("/api/blogs");
      const updatedBlog = res.data.find((b) => b._id === blog._id);
      if (updatedBlog) {
        setComments(updatedBlog.comments);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleAddComment = async () => {
    if (!commentData.name || !commentData.comment) {
      alert("Please enter your name and comment");
      return;
    }
    try {
      const res = await axios.post("/api/add-comment", {
        blogId: blog._id,
        name: commentData.name,
        comment: commentData.comment,
      });
      if (res.data.success) {
        setComments(res.data.blog.comments);
        setCommentData({ name: "", comment: "" });
      } else {
        alert("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Error adding comment");
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const res = await axios.delete(`/api/delete-comment/${blog._id}/${commentId}`);
      if (res.data.success) {
        setComments(res.data.blog.comments);
      } else {
        alert("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Error deleting comment");
    }
  };

  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <h4 className="text-lg font-bold mb-2">{blog.title}</h4>
      <img src={blog.coverImage} alt={blog.title} className="mb-2 max-h-48 object-cover" />
      <p className="mb-2">{blog.content}</p>
      <p className="mb-2 text-sm text-gray-600">Author: {blog.author}</p>
      <p className="mb-2 text-sm text-gray-600">Likes: {blog.Likes} | Views: {blog.Views}</p>

      <div className="mb-2">
        <h5 className="font-semibold">Comments:</h5>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((c) => (
            <div key={c._id} className="border border-gray-200 rounded p-2 mb-1 flex justify-between items-center">
              <div>
                <p className="font-semibold">{c.name}</p>
                <p>{c.comment}</p>
                <p className="text-xs text-gray-500">{new Date(c.commentedAt).toLocaleString()}</p>
              </div>
              <button
                onClick={() => handleDeleteComment(c._id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <div className="flex flex-col max-w-md space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={commentData.name}
          onChange={handleCommentChange}
          className="border border-gray-300 p-2 rounded"
        />
        <textarea
          name="comment"
          placeholder="Your Comment"
          value={commentData.comment}
          onChange={handleCommentChange}
          className="border border-gray-300 p-2 rounded"
          rows={3}
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default BlogManagement;

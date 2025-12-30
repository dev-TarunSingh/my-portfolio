// src/pages/AdminBlogs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AdminBlogs = () => {
  const { admin, logout } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/admin/blogs", {
        headers: { Authorization: `Bearer ${admin?.token}` },
      });
      setBlogs(res.data.blogs || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (admin?.token) fetchBlogs();
  }, [admin]);

  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`/api/admin/blogs/${blogId}`, {
        headers: { Authorization: `Bearer ${admin?.token}` },
      });
      fetchBlogs();
    } catch (err) {
      console.error("Delete blog error:", err);
      alert("Failed to delete blog");
    }
  };

  const handleDeleteComment = async (blogId, commentId) => {
    if (!window.confirm("Delete this comment?")) return;
    try {
      await axios.delete(`/api/admin/blogs/${blogId}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${admin?.token}` },
      });
      fetchBlogs();
    } catch (err) {
      console.error("Delete comment error:", err);
      alert("Failed to delete comment");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading Blogs...
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-brand-violet">Admin Panel</h1>
        <nav className="space-y-4">
          <Link
            to="/admin/dashboard"
            className="block text-gray-700 hover:text-brand-cyan"
          >
            📊 Dashboard
          </Link>
          <Link
            to="/admin/blogs"
            className="block text-gray-700 hover:text-orange-600"
          >
            📝 Blog Management
          </Link>
          <Link
            to="/admin/analytics"
            className="block text-gray-700 hover:text-orange-600"
          >
            👀 Visitor Analytics
          </Link>
          <button
            onClick={logout}
            className="mt-10 w-full inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-violet text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          All Blogs 📝
        </h2>

        {blogs.length === 0 ? (
          <p className="text-gray-500">No blogs available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex flex-col"
              >
                <img
                  src={blog.coverImage || "/default-image.jpg"}
                  alt={blog.title || "Untitled"}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  {blog.title || "Untitled"}
                </h3>
                <p className="text-gray-500 mb-2">
                  {blog.summary || "No summary"}
                </p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>❤️ {blog.likes ?? 0} Likes</span>
                  <span>📝 {blog.comments?.length ?? 0} Comments</span>
                </div>

                {/* Comments */}
                {blog.comments?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Comments
                    </h4>
                    <ul className="max-h-40 overflow-y-auto border rounded p-2">
                      {blog.comments.map((c) => (
                        <li
                          key={c._id}
                          className="flex justify-between items-start mb-1 text-sm"
                        >
                          <span>{c.text}</span>
                          <button
                            onClick={() => handleDeleteComment(blog._id, c._id)}
                            className="ml-2 text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() =>
                      (window.location.href = `/admin/blogs/edit/${blog._id}`)
                    }
                    className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-violet hover:opacity-95 text-white py-2 rounded"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminBlogs;

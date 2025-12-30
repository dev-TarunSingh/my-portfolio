import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const SAMPLE_BLOGS = [
  {
    title: "Design Systems for Scale",
    summary: "How I built a scalable design system to accelerate frontend development.",
    coverImage: "https://images.unsplash.com/photo-1527820775523-0038e0d3148f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc",
    content: "Case study: component-driven development, tokens, and performance wins.",
  },
  {
    title: "Optimizing React Performance",
    summary: "Tactics and tools I used to reduce bundle size and improve TTFB.",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=def",
    content: "Practical steps: code-splitting, memoization, and lazy loading.",
  },
];

function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // main section id: #blogs

    axios
      .get("/api/blogs")
      .then((res) => {
        setBlogList(res.data && res.data.length ? res.data : SAMPLE_BLOGS);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Error fetching blogs; falling back to samples", err);
        setBlogList(SAMPLE_BLOGS);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading blogs...</p>;

  return (
    <section id="blogs" className="py-16 scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-4xl font-extrabold text-center mb-10">Latest Blogs</motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogList.map((blog, idx) => (
            <motion.article key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <img loading="lazy" src={blog.coverImage} alt={blog.title} className="w-full h-44 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{blog.summary}</p>
                <div className="mt-auto flex items-center gap-3">
                  <button onClick={() => setSelectedBlog(blog)} aria-label={`Read ${blog.title}`} className="px-4 py-2 bg-gradient-to-r from-brand-cyan to-brand-violet text-white rounded-full font-medium">Read Blog</button>
                  <div className="text-sm text-gray-400">{blog.date || '•'}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {selectedBlog && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-3xl bg-white rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedBlog.title}</h3>
                <button aria-label="Close" className="text-gray-500" onClick={() => setSelectedBlog(null)}>✕</button>
              </div>
              <img loading="lazy" src={selectedBlog.coverImage} alt={selectedBlog.title} className="w-full h-56 object-cover rounded-xl mb-4" />
              <div className="prose max-w-none">
                <p>{selectedBlog.content}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blogs;

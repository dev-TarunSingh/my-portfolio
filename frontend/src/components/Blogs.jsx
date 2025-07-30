import React, { useState } from "react";
import ActlocalImage from "../assets/actlocal.png";
import axios from "axios";

function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  // const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/blogs") // Replace with your actual backend URL
  //     .then((res) => {
  //       setBlogList(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching blogs:", err);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p className="text-center">Loading blogs...</p>;

  const blogList = [
    {
      title: "Mastering React in 2025",
      summary:
        "A complete guide to learning React with best practices, performance tips, and upcoming features in 2025.",
      coverImage: "https://source.unsplash.com/featured/?reactjs,code",
    },
    {
      title: "Why Tailwind CSS is Taking Over",
      summary:
        "Explore how Tailwind CSS simplifies styling, boosts productivity, and leads frontend trends in modern development.",
      coverImage: "https://source.unsplash.com/featured/?tailwindcss,web",
    },
    {
      title: "Top 10 VS Code Extensions for Developers",
      summary:
        "Supercharge your coding workflow with these essential VS Code extensions you might not know about.",
      coverImage: "https://source.unsplash.com/featured/?vscode,code",
    },
    {
      title: "Getting Started with MERN Stack",
      summary:
        "A beginner-friendly introduction to building full-stack apps using MongoDB, Express, React, and Node.js.",
      coverImage: "https://source.unsplash.com/featured/?mern,development",
    },
    {
      title: "How to Deploy Your App for Free in 2025",
      summary:
        "Learn the best platforms and strategies to deploy full-stack apps without spending a rupee.",
      coverImage: "https://source.unsplash.com/featured/?deployment,cloud",
    },
    {
      title: "AI in Everyday Coding: Myth or Future?",
      summary:
        "We discuss how tools like ChatGPT and GitHub Copilot are changing the way we write and debug code.",
      coverImage: "https://source.unsplash.com/featured/?ai,coding",
    },
  ];

  // const response = axios.get("/api/blogs");
  // const blogs = response.data;

  return (
    <div className="min-h-screen text-black pt-20 relative z-0 overflow-hidden">
      {/* MAIN BLOG GRID */}
      <div className="px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {blogList.map((blog, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[48%] lg:w-[30%] p-4 rounded-4xl shadow-lg flex flex-col cursor-pointer hover:bg-blue-300 transition"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 ">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <p className="mb-4">{blog.summary}</p>
              <button className="mt-auto inline-block rounded-3xl bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 transition duration-300">
                Read Blog
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP PANEL (not fixed) */}
      <div
        className={`absolute left-0 right-0 bottom-0 z-10 transition-transform duration-500 ${
          selectedBlog ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto shadow-2xl border-t border-gray-700">
          {selectedBlog && (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedBlog.title}</h3>
                <button
                  className="text-red-400 text-xl hover:text-red-300"
                  onClick={() => setSelectedBlog(null)}
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedBlog.coverImage}
                alt={selectedBlog.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <p className="whitespace-pre-line leading-relaxed text-gray-200">
                {selectedBlog.content}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

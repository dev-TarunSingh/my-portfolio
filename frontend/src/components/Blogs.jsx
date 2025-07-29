import React, { useState } from "react";
import ActlocalImage from "../assets/actlocal.png";

function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: "ActLocal - Hyperlocal Service Marketplace",
      summary:
        "A MERN stack mobile application that connects customers with nearby service providers for quick and reliable service bookings.",
      content: `
🚀 ActLocal is a MERN-based mobile application that bridges the gap between local service providers and nearby customers. 

It supports geolocation search, real-time chat, bookings, and provider dashboards — all focused on hyperlocal needs.

✅ Built using: React Native, Node.js, Express, MongoDB with GeoJSON.
      `,
      coverImage: ActlocalImage,
    },
    // Add more blog objects if needed
  ];

  return (
    <div className="min-h-screen text-white pt-20 relative z-0 overflow-hidden">
      {/* MAIN BLOG GRID */}
      <div className="px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-5 rounded-4xl shadow-lg flex flex-col cursor-pointer hover:bg-gray-700 transition"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="aspect-w-16 aspect-h-9 mb-5">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{blog.title}</h3>
              <p className="mb-4">{blog.summary}</p>
              <button className="mt-auto inline-block rounded-3xl bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 transition duration-300">
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
        <div className="bg-gray-800 rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto shadow-2xl border-t border-gray-700">
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

// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AdminDashboard = () => {
  const { logout, admin } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDashboard = async () => {
    try {
      const res = await axios.get("/api/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${admin?.token}`,
        },
      });
      setDashboardData(res.data);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, [admin]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  if (!admin?.token) {
    return <div>Unauthorized. Please login again.</div>;
  }

  if (!dashboardData?.success) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-lg font-semibold">
        Failed to load dashboard data.
      </div>
    );
  }

  const { totalVisitors, totalBlogs, totalViews, totalLikes } = dashboardData;

  const handleLogout = () => logout();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <aside className="w-full lg:w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-orange-600">Admin Panel</h1>
        <nav className="space-y-4">
          <Link
            to="/admin/dashboard"
            className="block text-gray-700 hover:text-orange-600"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/blogs"
            className="block text-gray-700 hover:text-orange-600"
          >
            Blog Management
          </Link>
          <Link
            to="/admin/analytics"
            className="block text-gray-700 hover:text-orange-600"
          >
            Visitor Analytics
          </Link>
          <button
            onClick={handleLogout}
            className="mt-10 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome, Admin 👋
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Total Visitors"
            value={totalVisitors}
            onClick={() => navigate("/admin/analytics")}
          />
          <DashboardCard
            title="Blogs Posted"
            value={totalBlogs}
            onClick={() => navigate("/admin/blogs")}
          />
          <DashboardCard title="Total Views" value={totalViews} />
          <DashboardCard title="Total Likes" value={totalLikes} />
        </div>
      </main>
    </div>
  );
};

const DashboardCard = ({ title, value, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
  >
    <h3 className="text-lg font-bold text-gray-700 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-orange-500">{value}</p>
  </div>
);

export default AdminDashboard;

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AdminDashboard = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
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

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome, Admin 👋
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Total Visitors
            </h3>
            <p className="text-3xl font-bold text-orange-500">2456</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Blogs Posted
            </h3>
            <p className="text-3xl font-bold text-orange-500">14</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Devices Tracked
            </h3>
            <p className="text-3xl font-bold text-orange-500">12</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

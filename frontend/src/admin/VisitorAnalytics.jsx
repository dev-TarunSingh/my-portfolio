// src/pages/VisitorAnalytics.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const VisitorAnalytics = () => {
  const { admin, logout } = useAuth();
  const [visitors, setVisitors] = useState([]);
  const [visitorsPerDay, setVisitorsPerDay] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allVisitorsRes, perDayRes] = await Promise.all([
          axios.get("/api/admin/dashboard", {
            headers: { Authorization: `Bearer ${admin?.token}` },
          }),
          axios.get("/api/visitors-per-day", {
            headers: { Authorization: `Bearer ${admin?.token}` },
          }),
        ]);

        if (allVisitorsRes.data.success)
          setVisitors(allVisitorsRes.data.visitorDetails || []);
        if (perDayRes.data.success)
          setVisitorsPerDay(perDayRes.data.data || []);
      } catch (err) {
        console.error("Error fetching visitor data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [admin]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading Visitor Analytics...
      </div>
    );

  // Aggregate stats
  const totalVisitors = visitors.length;
  const uniqueVisitors = new Set(visitors.map((v) => v.ip)).size;
  const todayVisitors = visitors.filter(
    (v) => new Date(v.time).toDateString() === new Date().toDateString()
  ).length;

  // Chart data
  const perDayChart = {
    labels: visitorsPerDay.map((v) => v._id),
    datasets: [
      {
        label: "Visitors 👥",
        data: visitorsPerDay.map((v) => v.count),
        backgroundColor: "#f97316",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-orange-600">Admin Panel</h1>
        <nav className="space-y-4">
          <Link
            to="/admin/dashboard"
            className="block text-gray-700 hover:text-orange-600"
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
            className="mt-10 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Visitor Analytics 👀
        </h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Visitors" value={totalVisitors} emoji="🌐" />
          <StatCard title="Unique Visitors" value={uniqueVisitors} emoji="🆔" />
          <StatCard title="Today's Visitors" value={todayVisitors} emoji="📅" />
        </div>

        {/* Visitors Per Day Chart */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Visitors Per Day 📈</h3>
          <Bar
            data={perDayChart}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>

        {/* All Visitors Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">All Visitors 📝</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">IP</th>
                  <th className="border px-4 py-2">Path</th>
                  <th className="border px-4 py-2">Browser</th>
                  <th className="border px-4 py-2">OS</th>
                  <th className="border px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map(({ _id, ip, path, browser, os, time }) => (
                  <tr key={_id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{ip}</td>
                    <td className="border px-4 py-2">{path}</td>
                    <td className="border px-4 py-2">{browser}</td>
                    <td className="border px-4 py-2">{os}</td>
                    <td className="border px-4 py-2">
                      {new Date(time).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ title, value, emoji }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center">
    <div className="text-4xl mb-2">{emoji}</div>
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <p className="text-3xl font-bold text-orange-500">{value}</p>
  </div>
);

export default VisitorAnalytics;

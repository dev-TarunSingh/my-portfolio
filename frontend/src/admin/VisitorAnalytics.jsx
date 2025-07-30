import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const VisitorAnalytics = () => {
  const { admin } = useAuth();
  const [visitors, setVisitors] = useState([]);
  const [visitorsPerDay, setVisitorsPerDay] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await axios.get("/api/admin/dashboard", {
          headers: { Authorization: `Bearer ${admin?.token}` },
        });
        if (res.data.success) {
          setVisitors(res.data.visitorDetails);
        }
      } catch (error) {
        console.error("Error fetching visitors:", error);
      }
    };

    const fetchVisitorsPerDay = async () => {
      try {
        const res = await axios.get("/api/visitors-per-day", {
          headers: { Authorization: `Bearer ${admin?.token}` },
        });
        if (res.data.success) {
          setVisitorsPerDay(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching visitors per day:", error);
      }
    };

    fetchVisitors();
    fetchVisitorsPerDay();
    setLoading(false);
  }, [admin]);

  if (loading) {
    return <div>Loading Visitor Analytics...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Visitor Analytics</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Visitors Per Day</h3>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Count</th>
            </tr>
          </thead>
          <tbody>
            {visitorsPerDay.map(({ _id, count }) => (
              <tr key={_id}>
                <td className="border border-gray-300 px-4 py-2">{_id}</td>
                <td className="border border-gray-300 px-4 py-2">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">All Visitors</h3>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">IP</th>
              <th className="border border-gray-300 px-4 py-2">Path</th>
              <th className="border border-gray-300 px-4 py-2">Browser</th>
              <th className="border border-gray-300 px-4 py-2">OS</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map(({ _id, ip, path, browser, os, time }) => (
              <tr key={_id}>
                <td className="border border-gray-300 px-4 py-2">{ip}</td>
                <td className="border border-gray-300 px-4 py-2">{path}</td>
                <td className="border border-gray-300 px-4 py-2">{browser}</td>
                <td className="border border-gray-300 px-4 py-2">{os}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(time).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default VisitorAnalytics;

import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function AdminLogin() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      console.log("Login response status:", res.status);

      let data = null;
      try {
        data = await res.json();
      } catch (err) {
        // Response had no valid JSON (e.g., 404 or empty body)
        console.warn('Failed to parse login response JSON', err);
      }

      if (res.ok && data?.token) {
        login(data.token);
        navigate("/admin/dashboard");
      } else {
        const msg = data?.message || `Login failed (${res.status})`;
        alert(msg);
      }
    } catch (err) {
      console.error("Network/login error:", err);
      alert("Network error while logging in. Make sure backend is running on port 3000.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-brand-violet text-center">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1 text-sm">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex justify-center items-center bg-gradient-to-r from-brand-cyan to-brand-violet hover:opacity-95 text-white py-2 rounded-xl transition-all duration-200 text-sm font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don’t have an admin account?{" "}
          <Link
            to="/admin/signup"
            className="text-orange-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

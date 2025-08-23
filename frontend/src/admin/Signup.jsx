import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    alert("Ask Admin to create new account ;)");s
    // console.log("Signing up admin:", { username, password });
    // if (!username || !password) {
    //   alert("Username and password are required");
    //   return;
    // }
    // const res = await fetch("/api/admin/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username, password }),
    // });

    // const data = await res.json();
    // if (res.ok) {
    //   alert("Admin created. Now login.");
    //   navigate("/admin/login");
    // } else {
    //   alert(data.message || "Signup failed");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-red-200">
        <h2 className="text-2xl font-semibold text-orange-600 text-center">
          Admin Signup
        </h2>
        <form onSubmit={signup} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-xl transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm">
          Already have an admin account?{" "}
          <Link
            to="/admin/login"
            className="text-orange-600 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

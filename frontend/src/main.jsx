import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AdminDashboard from "./admin/Dashboard.jsx";
import VisitorAnalytics from "./admin/VisitorAnalytics.jsx";
import BlogManagement from "./admin/BlogManagement.jsx";
import Login from "./admin/Login.jsx";
import { AuthProvider } from "./admin/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<VisitorAnalytics />} />
          <Route path="/admin/blogs" element={<BlogManagement />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

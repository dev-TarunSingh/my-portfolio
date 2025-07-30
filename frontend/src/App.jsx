import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import HireMe from "./components/Hireme";
import Blogs from "./components/Blogs";
import Background from "./components/Background";

import AdminLogin from "./admin/Login";
import AdminSignup from "./admin/Signup";
import AdminDashboard from "./admin/Dashboard";
import ProtectedRoute from "./admin/ProtectedRoute";
import { AuthProvider } from "./admin/AuthContext";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  const renderComponent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "skills":
        return <Skills />;
      case "about":
        return <About />;
      case "hireme":
        return <HireMe setActiveTab={setActiveTab} />;
      case "blogs":
        return <Blogs />;
      default:
        return <Home />;
    }
  };

  return (
    <AuthProvider>
      <Background />
      {!isAdminRoute && (
        <>
          <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
          {renderComponent()}
        </>
      )}

      {/* Admin routing */}
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;

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
import ErrorBoundary from "./components/ErrorBoundary";

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

  React.useEffect(() => {
    console.log('Active tab changed ->', activeTab);

    // After activeTab changes, scroll to the section if present.
    // Use a small timeout so React can mount the component into the DOM first.
    setTimeout(() => {
      const el = document.getElementById(activeTab);
      if (el) {
        console.log('Scrolling to element by id:', activeTab);
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      // Fallback to scrolling main into view
      const main = document.querySelector('main');
      if (main) {
        console.log('Element not found; scrolling main into view.');
        main.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      // Final fallback: scroll to top
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 140);
    }, 60);
  }, [activeTab]);

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
          <main className="pt-28">
            <ErrorBoundary>{renderComponent()}</ErrorBoundary>
          </main>
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

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/taruncodesLogo.webp";

function Navbar({ setActiveTab, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabs = [
    { name: "Home", key: "home" },
    { name: "Projects", key: "projects" },
    { name: "Blogs", key: "blogs" },
    { name: "Hire Me", key: "hireme" },
    { name: "Contact Me", key: "contact" },
    { name: "Skills", key: "skills" },
    { name: "About", key: "about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 shadow-md z-50 px-4 py-3">
      {/* Logo + Hamburger */}
      <div
        className={`flex ${
          isDesktop ? "justify-between" : "flex-col items-center"
        }`}
      >
        {/* Logo + Title */}
        <div className="flex items-center space-x-2 mb-2 lg:mb-0">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold">TarunCodes.tech</h1>
        </div>

        {/* Hamburger for small screens */}
        {!isDesktop && (
          <button
            className="p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Nav Items for desktop */}
        {isDesktop && (
          <ul className="flex flex-row space-x-5 items-center">
            {tabs.map((tab) => (
              <li key={tab.key}>
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    activeTab === tab.key
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black hover:bg-blue-200"
                  }`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Nav Items for small screens */}
      {!isDesktop && isOpen && (
        <ul
          className={`
    mt-4
    flex flex-wrap justify-center items-center gap-2
    overflow-x-auto
    max-w-full
    px-2
    lg:hidden
  `}
        >
          {tabs.map((tab) => (
            <li key={tab.key}>
              <button
                onClick={() => {
                  setActiveTab(tab.key);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-gray-300 text-black"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

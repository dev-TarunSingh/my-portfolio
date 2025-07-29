import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/taruncodesLogo.webp"; // Adjust path if needed

function Navbar({ setActiveTab, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 p-3 bg-light-blue bg-opacity-75 backdrop-blur-md text-black lg:flex lg:justify-between lg:items-center z-50">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-3xl font-bold text-bright-blue">
            TarunCodes.tech
          </h1>
        </div>
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ul
        className={`flex flex-col items-center lg:flex-row lg:space-x-5 transition-all duration-300 ease-in-out ${
          isOpen ? "block mt-3 space-y-2" : "hidden lg:flex"
        }`}
      >
        {tabs.map((tab) => (
          <li key={tab.key}>
            <button
              onClick={() => {
                setActiveTab(tab.key);
                setIsOpen(false);
              }}
              className={`px-5 py-2 rounded-full shadow-lg ${
                activeTab === tab.key
                  ? "bg-gray-300 text-black"
                  : "bg-white text-black hover:bg-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-300`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

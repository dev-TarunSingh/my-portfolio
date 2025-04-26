import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/taruncodesLogo.webp"; // Ensure the path is correct

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 p-3 bg-light-blue bg-opacity-75 backdrop-blur-md text-white lg:flex lg:justify-between lg:items-center">
      <div className="flex justify-between items-center w-full lg:w-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />{" "}
          {/* Circular logo */}
          <h1 className="text-3xl font-bold text-bright-blue">
            TarunCodes.tech
          </h1>
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col items-center lg:flex-row lg:space-x-5 w-auto lg:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? "block mt-3 space-y-2" : "hidden lg:flex"
        }`}
      >
        <li>
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsOpen(false)}
            to="/projects"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsOpen(false)}
            to="/hireme"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Hire Me
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsOpen(false)}
            to="/contact"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Contact Me
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsOpen(false)}
            to="/skills"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsOpen(false)}
            to="/about"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

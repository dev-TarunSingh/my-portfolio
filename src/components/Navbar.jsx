import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 p-3 bg-light-blue bg-opacity-75 backdrop-blur-md text-white md:flex md:justify-between md:items-center">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-xl font-bold text-bright-blue">TarunCodes.tech</h1>
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <ul
        className={`flex flex-col items-center md:flex-row md:space-x-5 w-auto md:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? "block mt-3 space-y-2" : "hidden md:flex"
        }`}
      >
        <li>
          <Link
            to="/"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Contact Me
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="block px-5 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
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

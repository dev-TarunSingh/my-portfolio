import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/taruncodesLogo.webp";
import { motion } from "framer-motion";

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
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className="fixed top-4 left-4 right-4 z-50 rounded-xl bg-white/60 backdrop-blur-md border border-white/10 shadow-lg px-4 py-3" role="navigation" aria-label="Main navigation">
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
                  onClick={() => {
                    setActiveTab(tab.key);
                    console.log('Navbar click:', tab.key);
                    const el = document.getElementById(tab.key);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    else {
                      const main = document.querySelector('main');
                      if (main) main.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      else setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 140);
                    }
                  }}
                  aria-current={activeTab === tab.key ? 'page' : undefined}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-brand-cyan to-brand-violet text-white shadow"
                      : "bg-white text-gray-800 hover:bg-gray-100"
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
                  console.log('Navbar mobile click:', tab.key);
                  const el = document.getElementById(tab.key);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  else {
                    const main = document.querySelector('main');
                    if (main) main.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    else setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 140);
                  }
                }}
                className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-brand-cyan to-brand-violet text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}

export default Navbar;

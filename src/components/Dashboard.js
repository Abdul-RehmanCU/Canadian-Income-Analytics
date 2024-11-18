import React, { useState } from "react";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

const Dashboard = ({ children, darkMode, toggleDarkMode, animated }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100`}>
      {/* Top Navbar */}
      <header className="w-full bg-gray-700 dark:bg-gray-800 text-gray-400 dark:text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="md:hidden text-white">
            <FiMenu className="w-6 h-6" />
          </button>
          <span className="text-white font-bold text-xl">Dashboard</span>
          <nav className={`flex space-x-4 ${menuOpen ? "block" : "hidden"} md:flex`}>
            <Link to="/overview" className="hover:text-white dark:hover:text-gray-400 transition duration-200">
              Overview
            </Link>
            <Link to="/report" className="hover:text-white dark:hover:text-gray-400 transition duration-200">
              Reports
            </Link>
            <Link to="/settings" className="hover:text-white dark:hover:text-gray-400 transition duration-200">
              Settings
            </Link>
          </nav>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full bg-gray-500 dark:bg-gray-900 text-white hover:bg-gray-900 dark:hover:bg-gray-500 transition duration-600 ${
            animated ? "animate-icon-flip" : ""
          }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Dashboard;

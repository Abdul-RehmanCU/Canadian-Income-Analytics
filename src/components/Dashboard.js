import React, { useState } from "react";
import Header from "./Header";
import DataVisualization from "./DataVisualization";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true); 
  const [refreshKey, setRefreshKey] = useState(0);

  const toggleDarkMode = () => {
    setAnimated(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setAnimated(false);
    }, 200);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const refreshData = () => {
    setRefreshKey((prevKey) => prevKey + 1); 
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 animate-fade-in`}>
      {/* Top Navbar */}
      <header className="w-full bg-gray-700 dark:bg-gray-800 text-gray-400 dark:text-white p-4 flex justify-between items-center">
        {/* Navigation Title */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="md:hidden text-white">
            <FiMenu className="w-6 h-6" />
          </button>
          <span className="text-gray-400 font-bold text-xl dark:text-white transition duration-200">Dashboard</span>
          <nav className={`flex space-x-4 ${menuOpen ? "flex" : "hidden"} md:flex`}>
            <a href="#" className="hover:text-white transition duration-200 dark:hover:text-gray-500 hover:scale-125">Overview</a>
            <a href="#" className="hover:text-white transition duration-200 dark:hover:text-gray-500 hover:scale-125">Reports</a>
            <a href="#" className="hover:text-white transition duration-200 dark:hover:text-gray-500 hover:scale-125">Settings</a>
          </nav>
        </div>
        <button 
          onClick={toggleDarkMode} 
          className={`p-2 rounded-full bg-white dark:bg-gray-500 shadow-lg text-black dark:text-white hover:scale-125 transition duration-300 ${animated ? "animate-icon-flip" : ""}`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6 dark:bg-gray-700 animate-slide-in-up">
        <Header refreshData={refreshData} />
        <section className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg animate-slide-in-up">
          <DataVisualization key={refreshKey} darkMode={darkMode} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

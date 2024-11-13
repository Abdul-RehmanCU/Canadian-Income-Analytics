import React, { useState } from "react";
import Header from "./Header";
import DataVisualization from "./DataVisualization";
import { FiMenu, FiX } from "react-icons/fi";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDarkMode = () => {
    setAnimated(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setAnimated(false);
    }, 200);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100`}>
    {/* Sidebar */}
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-gray-700 dark:bg-gray-800 text-gray-400 dark:text-white p-4 flex flex-col items-center transition-all duration-300 h-screen fixed md:relative z-10`}
    >
      <div className="flex justify-between items-center w-full mb-6">
        {sidebarOpen && <h2 className="text-xl md:text-3xl font-bold transition duration 600">Navigation</h2>}
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-full bg-purple-500 dark:bg-purple-800 text-white hover:bg-purple-600 dark:hover:bg-purple-900 transition duration-200"
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 md:space-y-10">
          <button className="text-gray-400 hover:text-white transition duration-200">Overview</button>
          <button className="text-gray-400 hover:text-white transition duration-200">Reports</button>
          <button className="text-gray-400 hover:text-white transition duration-200">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 space-y-6 bg-gray-100 dark:bg-gray-900">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} animated={animated} />
        <section className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg animate-slide-in-up">
          <DataVisualization darkMode={darkMode} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

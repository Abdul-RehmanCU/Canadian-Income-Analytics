import React, { useState } from "react";
import Header from "./Header";
import DataVisualization from "./DataVisualization";
import SunIcon from "../assets/SunIcon.svg";
import MoonIcon from "../assets/MoonIcon.svg";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [animated, setAnimated] = useState(false);

  const toggleDarkMode = () => {
    setAnimated(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setAnimated(false);
    }, 300);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100`}>
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-700 dark:bg-gray-800 text-gray-400 dark:text-white p-5 flex flex-col items-center transtion duration-600">
        <div className="w-full flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Navigation</h2>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-purple-500 dark:bg-purple-800 text-white hover:bg-purple-600 dark:hover:bg-purple-900 transition duration-200"
            aria-label="Toggle Dark Mode"
          >
            <img
              src={darkMode ? SunIcon : MoonIcon}
              alt={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={`w-6 h-6 ${animated ? "animate-icon-flip" : ""}`}
            />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-10">
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">Overview</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">Reports</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6 bg-gray-100 dark:bg-gray-900 ">
        <Header />
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up">
          <DataVisualization darkMode={darkMode} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

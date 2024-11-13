import React from "react";
import SunIcon from "../assets/SunIcon.svg";
import MoonIcon from "../assets/MoonIcon.svg";

const Header = ({darkMode, toggleDarkMode, animated}) => {
  return (
    <header className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md flex justify-between items-center animate-fade-in">
      <h1 className="text-3xl font-semibold">Income & Housing Dashboard</h1>
      <div className="flex space-x-4 items-center">
      <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-purple-500 dark:bg-purple-800 text-white hover:bg-purple-600 dark:hover:bg-purple-900 transition duration-200"
            aria-label="Toggle Dark Mode"
          >
            <img
              src={darkMode ? SunIcon : MoonIcon}
              alt={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={`w-5 h-5 md:w-6 md:h-6 ${animated ? "animate-icon-flip" : ""}`}
            />
          </button>

          <button className="bg-purple-500 dark:bg-purple-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 dark:hover:bg-purple-900 transition duration-200">Refresh Data</button>
      </div>    
    </header>
  );
};

export default Header;
import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FiRotateCw } from "react-icons/fi";


const Header = ({darkMode, toggleDarkMode, animated, refreshData}) => {
  const[loading, setLoading] = useState(false);
  const handleRefreshClick = () => {
    setLoading(true)
    setTimeout(() =>{
      refreshData()
      setLoading(false)
    }, 200)
  }


  return (
    <header className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md flex justify-between items-center animate-fade-in">
      <h1 className="text-3xl font-semibold">Income & Housing Dashboard</h1>
      <div className="flex space-x-4 items-center">
      <button
          onClick={handleRefreshClick}
          disabled={loading}
          className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 dark:bg-gray-500 shadow-lg text-white dark:text-white hover:scale-125 transition duration-200 ${loading ? "animate-spin" : ""}`}
        >
          {loading ? (
            <FiRefreshCw className="w-5 h-5 animate-spin" />
          ) : (
            <span><FiRotateCw /></span>
          )}
        </button>
      </div>    
    </header>
  );
};

export default Header;
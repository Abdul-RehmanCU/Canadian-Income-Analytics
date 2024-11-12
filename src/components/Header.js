import React from "react";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md flex justify-between items-center animate-fade-in">
      <h1 className="text-3xl font-semibold">Income & Housing Dashboard</h1>
      <button className="bg-purple-500 dark:bg-purple-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 dark:hover:bg-purple-900 transition duration-200">Refresh Data</button>
    </header>
  );
};

export default Header;
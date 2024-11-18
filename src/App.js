import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Report from "./components/Report";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const toggleDarkMode = () => {
    setAnimated(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setAnimated(false); 
    }, 200);
  };

  return (
    <Router>
      <Dashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} animated={animated}>
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/report" element={<Report setRefreshKey={setRefreshKey} refreshKey={refreshKey} />} />
          <Route
            path="/settings"
            element={
              <div>
                <h1 className="text-3xl font-bold dark:text-white">Settings</h1>
                <p className="text-gray-700 dark:text-gray-300">Configure your settings here.</p>
              </div>
            }
          />
        </Routes>
      </Dashboard>
    </Router>
  );
};

export default App;

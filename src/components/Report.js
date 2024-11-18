import React from "react";
import DataVisualization from "./DataVisualization";
import Header from "./Header"

const Report = ({setRefreshKey, refreshKey}) => {
    const refreshData = () => {
        setRefreshKey((prevKey) => prevKey + 1); 
      };
  return (
    <div className="dark:bg-gray-700 transition duration-6000">
        <Header refreshData={refreshData} />
      <h1 className="text-3xl font-bold dark:text-white">Reports</h1>
      <p className="text-gray-800 dark:text-gray-300">Here are the reports and data visualizations:</p>
      <DataVisualization key={refreshKey}/>
    </div>
  );
};

export default Report;

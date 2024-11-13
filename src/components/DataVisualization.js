import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { housingData, incomeData } from "../data";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const hsValue = payload.find(item => item.dataKey === "hs")?.value;
    return (
      <div className="bg-white dark:bg-gray-800 dark:text-white p-2 rounded shadow-lg">
        <p className="font-semibold">{label}</p>
        <p>Income: ${payload[0].value}</p>
        <p>Housing: {hsValue !== null ? `$${hsValue}` : "N/A"}</p>
      </div>
    );
  }
  return null;
};

const DataVisualization = ({ darkMode }) => {
  return (
    <div className="p-4 mx-auto max-w-screen-lg w-full">
      <h2 className="text-center text-2xl font-semibold mb-4 dark:text-white">Income and Housing Data by Province and Territory</h2>
      <div className="w-full max-w-3xl mx-auto">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={incomeData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="province" label={{ value: "Province", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Income (in $)", angle: -90, position: "insideLeft", offset: -15 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: darkMode ? "#2d3748" : "#f7fafc" }} />
            <Legend verticalAlign="top" height={26} />
            <Bar animationDuration={2000} animationEasing="ease-out" dataKey="income" name="Income per Province" fill="#5a9f88" />
            <Bar animationDuration={1700} animationEasing="ease-out" dataKey="hs" name="Housing per Province" fill="#615a9f" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2 className="text-center text-2xl font-semibold mb-4 dark:text-white">Canadian vs US Housing Prices from 2005 - 2023</h2>
      <div className="w-full max-w-3xl mx-auto">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={housingData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" label={{ value: "Year", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "House Price (in $)", angle: -90, position: "insideLeft", offset: -15 }} />
            <Tooltip cursor={{ fill: darkMode ? "#2d3748" : "#f7fafc" }} />
            <Legend verticalAlign="top" height={26} />
            <Line animationDuration={2000} animationEasing="ease-out" dataKey="CDN" name="Canadian Houses" stroke="#5a9f88" />
            <Line animationDuration={1700} animationEasing="ease-out" dataKey="US" name="American Houses" stroke="#615a9f" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataVisualization;

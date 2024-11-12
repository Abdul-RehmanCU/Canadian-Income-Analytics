import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { incomeData } from "../data";

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
}

const DataVisualization = ({ darkMode }) => {
  return (
    <div className="p-4">
    <h2 className="text-center text-2xl font-semibold mb-4 dark:text-white">Income and Housing Data by Province and Territory</h2>
      <ResponsiveContainer width="100%" height={400} key={darkMode ? "dark" : "light"} >
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
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--tooltip-cursor-color)" }}/>
          <Legend verticalAlign="top" height={26} />
          <Bar animationDuration={2000} animationEasing="ease-out" dataKey="income" name="Income per Province" fill="#5a9f88"/>
          <Bar animationDuration={1700} animationEasing="ease-out" dataKey="hs" name="Housing per Province" fill="#615a9f" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataVisualization;

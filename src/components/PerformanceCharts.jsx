// PerformanceCharts.jsx
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function PerformanceCharts({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div>
      <h2>Performance Over Time</h2>
      <LineChart width={800} height={300} data={data}>
        <Line type="monotone" dataKey="Speed" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="Time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
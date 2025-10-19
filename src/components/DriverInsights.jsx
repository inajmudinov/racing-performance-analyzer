// DriverInsights.jsx
import React from "react";

export default function DriverInsights({ data }) {
  if (!data || data.length === 0) return null;

  const speeds = data.map(row => parseFloat(row.Speed)).filter(v => !isNaN(v));
  if (speeds.length === 0) return <p>No valid Speed column found in dataset.</p>;

  const avg = speeds.reduce((a, b) => a + b, 0) / speeds.length;
  const max = Math.max(...speeds);
  const min = Math.min(...speeds);

  return (
    <div>
      <h2>Driver Insights</h2>
      <p><strong>Average Speed:</strong> {avg.toFixed(2)} km/h</p>
      <p><strong>Max Speed:</strong> {max.toFixed(2)} km/h</p>
      <p><strong>Min Speed:</strong> {min.toFixed(2)} km/h</p>
    </div>
  );
}
import React from "react";

export default function DriverInsights({ data }) {
  if (!data || data.length === 0) return <p>No telemetry data uploaded yet.</p>;

  // Find the column containing "speed"
  const speedKey = Object.keys(data[0]).find(k => k.toLowerCase().includes("speed"));
  if (!speedKey) return <p>No speed column found in CSV file.</p>;

  const speeds = data
    .map(row => parseFloat(row[speedKey]))
    .filter(v => !isNaN(v));

  if (speeds.length === 0) return <p>No valid speed data found.</p>;

  const avgSpeed = speeds.reduce((a,b)=>a+b,0)/speeds.length;
  const maxSpeed = Math.max(...speeds);
  const minSpeed = Math.min(...speeds);

  return (
    <div>
      <h2>Driver Insights</h2>
      <p>Average Speed: {avgSpeed.toFixed(2)} km/h</p>
      <p>Max Speed: {maxSpeed.toFixed(2)} km/h</p>
      <p>Min Speed: {minSpeed.toFixed(2)} km/h</p>
    </div>
  );
}
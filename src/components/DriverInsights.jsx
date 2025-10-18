// src/components/DriverInsights.jsx
import React from 'react';

export default function DriverInsights({ data }) {
  if (!data || data.length === 0) {
    return <p>No telemetry data uploaded yet.</p>;
  }

  const speeds = data.map(d => d.speed);
  const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;
  const maxSpeed = Math.max(...speeds);
  const minSpeed = Math.min(...speeds);

  return (
    <div>
      <h2>Driver Insights</h2>
      <p><strong>Average Speed:</strong> {avgSpeed.toFixed(2)} km/h</p>
      <p><strong>Max Speed:</strong> {maxSpeed.toFixed(2)} km/h</p>
      <p><strong>Min Speed:</strong> {minSpeed.toFixed(2)} km/h</p>
    </div>
  );
}
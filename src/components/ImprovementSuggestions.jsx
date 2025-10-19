// ImprovementSuggestions.jsx
import React from "react";

export default function ImprovementSuggestions({ data }) {
  if (!data || data.length === 0) return null;

  const speeds = data.map(row => parseFloat(row.Speed)).filter(v => !isNaN(v));
  if (speeds.length === 0) return null;

  const maxSpeed = Math.max(...speeds);
  const minSpeed = Math.min(...speeds);
  const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;

  return (
    <div>
      <h2>Improvement Suggestions</h2>
      <ul>
        <li>Focus on corners where your speed drops below {minSpeed + 20} km/h.</li>
        <li>Maintain a smoother acceleration after apex to approach max speed ({maxSpeed.toFixed(2)} km/h) faster.</li>
        <li>Try to keep average speed above {avgSpeed.toFixed(2)} km/h next lap.</li>
      </ul>
    </div>
  );
}
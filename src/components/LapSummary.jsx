import React from 'react';

export default function LapSummary({ data }) {
  if (!data || data.length === 0) return null;

  const lapTime = (data.length / 10).toFixed(2); // Example calc
  return (
    <div className="lap-summary">
      <h2>🏁 Lap Summary</h2>
      <p>Estimated Lap Time: {lapTime} s</p>
    </div>
  );
}

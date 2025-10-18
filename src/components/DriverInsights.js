import React from 'react';

export default function DriverInsights({ data }) {
  if (!data || data.length === 0) {
    return <p>No telemetry data uploaded yet.</p>;
  }

  const speeds = data.map(d => d.speed);
  const avg = (speeds.reduce((a, b) => a + b, 0) / speeds.length).toFixed(2);
  const max = Math.max(...speeds);
  const min = Math.min(...speeds);

  return (
    <div className="insights">
      <h2>📈 Driver Insights</h2>
      <ul>
        <li><strong>Average Speed:</strong> {avg} km/h</li>
        <li><strong>Max Speed:</strong> {max} km/h</li>
        <li><strong>Min Speed:</strong> {min} km/h</li>
      </ul>

      {avg < 80 && <p>🏁 Tip: Try to maintain more consistent throttle on straights.</p>}
      {max > 150 && <p>🚀 Excellent top speed. Focus on optimizing cornering.</p>}
      {min < 20 && <p>⚠️ Heavy braking detected. Review entry points on corners.</p>}
    </div>
  );
}

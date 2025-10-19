import React from "react";

export default function DriverInsights({ data }) {
  if (!data || !data.rows || data.rows.length === 0) {
    return <p>No telemetry data uploaded yet.</p>;
  }

  return (
    <div>
      <h2>Driver Insights</h2>
      {data.numericColumns.map((col) => {
        const values = data.rows
          .map((row) => row[col])
          .filter((v) => typeof v === "number" && !isNaN(v));

        const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
        const min = Math.min(...values).toFixed(2);
        const max = Math.max(...values).toFixed(2);

        return (
          <div key={col} className="insight-card">
            <h3>{col}</h3>
            <p>Average: {avg}</p>
            <p>Min: {min}</p>
            <p>Max: {max}</p>
          </div>
        );
      })}
    </div>
  );
}
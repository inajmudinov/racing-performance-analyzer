import React from "react";

export default function ImprovementSuggestions({ data, onFetchAI }) {
  // compute min, max, average
  const numericColumns = Object.keys(data[0] || {}).filter(
    key => !isNaN(parseFloat(data[0][key]))
  );

  const stats = numericColumns.map(col => {
    const values = data.map(row => parseFloat(row[col]));
    return {
      column: col,
      min: Math.min(...values),
      max: Math.max(...values),
      avg: values.reduce((a,b)=>a+b,0)/values.length
    };
  });

  return (
    <div>
      <h2>Performance Insights</h2>
      <ul>
        {stats.map(s => (
          <li key={s.column}>{s.column}: min {s.min}, max {s.max}, avg {s.avg.toFixed(2)}</li>
        ))}
      </ul>
      <button onClick={()=>onFetchAI(data)}>Get AI Recommendation</button>
    </div>
  );
}
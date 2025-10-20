import React from "react";

export default function ImprovementSuggestions({ data, onFetchAI }) {
  if (!data || data.length === 0) return null;

  // Calculate min, max, avg for each numeric column
  const numericCols = Object.keys(data[0]).filter(key => !isNaN(parseFloat(data[0][key])));
  const stats = numericCols.map(col => {
    const values = data.map(row => parseFloat(row[col]));
    const min = Math.min(...values);
    const max = Math.max(...values);
    const avg = values.reduce((a,b) => a+b, 0) / values.length;
    return { col, min, max, avg };
  });

  return (
    <div>
      <h3>Performance Insights</h3>
      <table>
        <thead>
          <tr>
            <th>Column</th>
            <th>Min</th>
            <th>Max</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(s => (
            <tr key={s.col}>
              <td>{s.col}</td>
              <td>{s.min}</td>
              <td>{s.max}</td>
              <td>{s.avg.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => onFetchAI(data)}>Get AI Recommendation</button>
    </div>
  );
}
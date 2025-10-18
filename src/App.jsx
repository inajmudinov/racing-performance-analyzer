import { useState } from "react";
import Papa from "papaparse";

export default function App() {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: (result) => {
        const parsedData = result.data.filter(row => Object.keys(row).length > 1);
        setData(parsedData);
        calculateSummary(parsedData);
      },
    });
  };

  const calculateSummary = (rows) => {
    // Example: Assume CSV has column "Speed"
    const speeds = rows.map(r => parseFloat(r.Speed)).filter(v => !isNaN(v));
    const avg = (speeds.reduce((a, b) => a + b, 0) / speeds.length).toFixed(2);
    const max = Math.max(...speeds);
    const min = Math.min(...speeds);
    setSummary({ avg, max, min });
  };

  return (
    <div className="container">
      <h1>🏎️ Racing Performance Analyzer</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      {summary && (
        <div className="stats">
          <h2>Performance Summary</h2>
          <p>Average Speed: {summary.avg} km/h</p>
          <p>Max Speed: {summary.max} km/h</p>
          <p>Min Speed: {summary.min} km/h</p>
        </div>
      )}

      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {Object.keys(row).map((key) => (
                  <td key={key}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
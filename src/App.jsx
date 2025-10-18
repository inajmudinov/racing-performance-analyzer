import { useState } from "react";
import Papa from "papaparse";

export default function App() {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError(""); // reset error
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data;

        if (!parsedData || parsedData.length === 0) {
          setError("CSV is empty or invalid.");
          setData([]);
          setSummary(null);
          return;
        }

        setData(parsedData);
        calculateSummary(parsedData);
      },
      error: (err) => {
        setError("Failed to parse CSV: " + err.message);
      },
    });
  };

  const calculateSummary = (rows) => {
    // Adjust this to match your CSV column header exactly
    const columnName = "Speed";

    // Convert values to numbers, remove invalid entries
    const speeds = rows
      .map((r) => parseFloat(r[columnName]?.trim()))
      .filter((v) => !isNaN(v));

    if (speeds.length === 0) {
      setSummary({ avg: 0, max: 0, min: 0 });
      return;
    }

    const avg = (speeds.reduce((a, b) => a + b, 0) / speeds.length).toFixed(2);
    const max = Math.max(...speeds).toFixed(2);
    const min = Math.min(...speeds).toFixed(2);

    setSummary({ avg, max, min });
  };

  return (
    <div className="container">
      <h1>🏎️ Racing Performance Analyzer</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      {error && <p style={{ color: "red" }}>{error}</p>}

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
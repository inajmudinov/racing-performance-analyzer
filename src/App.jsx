import React, { useState } from "react";
import Papa from "papaparse";
import DriverInsights from "./components/DriverInsights";

export default function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      delimiter: "", // auto-detect comma, semicolon, tab
      complete: (results) => {
        setData(results.data);
      },
      error: (err) => {
        console.error("CSV parsing error:", err);
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Driver Insights</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <DriverInsights data={data} />
    </div>
  );
}
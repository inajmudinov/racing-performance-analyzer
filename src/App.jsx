import { useState } from "react";
import DriverInsights from "./components/DriverInsights";
import Papa from "papaparse";

export default function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      delimiter: "", // autodetects comma, semicolon, tab, etc.
      complete: (results) => {
        console.log("Parsed CSV data:", results.data);
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
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ marginBottom: "20px" }}
      />
      <DriverInsights data={data} />
    </div>
  );
}
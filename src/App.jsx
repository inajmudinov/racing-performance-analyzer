import React, { useState } from "react";
import Papa from "papaparse";
import ImprovementSuggestions from "./ImprovementSuggestions";

export default function App() {
  const [csvData, setCsvData] = useState([]);
  const [recommendation, setRecommendation] = useState("");

  const handleFileUpload = e => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => setCsvData(results.data),
    });
  };

  const fetchAIRecommendation = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data[0]), // Send first row for recommendation
      });
      const json = await res.json();
      setRecommendation(json.recommendation);
    } catch (err) {
      console.error(err);
      setRecommendation("Failed to fetch recommendation. Try again later.");
    }
  };

  return (
    <div>
      <h1>Racing Performance Analyzer</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {csvData.length > 0 && (
        <ImprovementSuggestions data={csvData} onFetchAI={fetchAIRecommendation} />
      )}
      {recommendation && (
        <div>
          <h3>AI Recommendation</h3>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
}
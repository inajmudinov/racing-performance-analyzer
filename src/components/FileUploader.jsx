// FileUpload.jsx
import React from "react";
import Papa from "papaparse";

export default function FileUpload({ onDataLoaded }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => onDataLoaded(result.data),
    });
  };

  return (
    <div>
      <h1>Racing Performance Analyzer</h1>
      <input type="file" accept=".csv" onChange={handleFile} />
    </div>
  );
}
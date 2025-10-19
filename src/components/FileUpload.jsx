import React from "react";
import Papa from "papaparse";

export default function FileUpload({ onDataLoaded }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        const rows = result.data;
        const headers = result.meta.fields;

        // Detect numeric columns automatically
        const numericColumns = headers.filter((header) =>
          rows.some((row) => typeof row[header] === "number" && !isNaN(row[header]))
        );

        onDataLoaded({
          headers,
          rows,
          numericColumns
        });
      },
    });
  };

  return (
    <div className="file-upload">
      <h2>Racing Performance Analyzer</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
}
// App.jsx
import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import DriverInsights from "./components/DriverInsights";
import PerformanceCharts from "./components/PerformanceCharts";
import ImprovementSuggestions from "./components/ImprovementSuggestions";

export default function App() {
  const [data, setData] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      <FileUpload onDataLoaded={setData} />
      <DriverInsights data={data} />
      <PerformanceCharts data={data} />
      <ImprovementSuggestions data={data} />
    </div>
  );
}
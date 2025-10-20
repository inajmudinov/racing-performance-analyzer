import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import DriverInsights from "./components/DriverInsights";
import PerformanceCharts from "./components/PerformanceCharts";
import ImprovementSuggestions from "./components/ImprovementSuggestions";

export default function App() {
  const [data, setData] = useState({ headers: [], rows: [], numericColumns: [] });

  const handleDataLoaded = (parsedData) => {
    setData(parsedData);
  };

  return (
    <div className="App">
      <FileUpload onDataLoaded={handleDataLoaded} />
      
      {data.rows.length > 0 && (
        <>
          <PerformanceCharts 
            rows={data.rows} 
            numericColumns={data.numericColumns} 
          />

          <DriverInsights 
            rows={data.rows} 
            numericColumns={data.numericColumns} 
          />

          <ImprovementSuggestions 
            rows={data.rows} 
            numericColumns={data.numericColumns} 
          />
        </>
      )}
    </div>
  );
}

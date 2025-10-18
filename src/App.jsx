// src/App.jsx
import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import DriverInsights from './components/DriverInsights';

function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result.trim();
      const rows = text.split('\n').map(row => row.split(','));

      // Assume header like: time,speed
      const parsedData = rows.slice(1) // remove header row
        .map(row => ({
          time: parseFloat(row[0]),
          speed: parseFloat(row[1])
        }))
        .filter(row => !isNaN(row.speed));

      setData(parsedData);
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Racing Performance Analyzer</h1>
      <FileUploader onFileUpload={handleFileUpload} />
      <DriverInsights data={data} />
    </div>
  );
}

export default App;
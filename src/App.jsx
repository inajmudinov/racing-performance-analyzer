import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import DriverInsights from './components/DriverInsights';

function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split('\n').map(row => row.split(','));
      setData(rows);
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
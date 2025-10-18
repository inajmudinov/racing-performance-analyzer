import React, { useState } from 'react';
import DriverInsights from './components/DriverInsights';
import LapSummary from './components/LapSummary';

function App() {
  const [telemetryData, setTelemetryData] = useState([]);

  return (
    <div className="app">
      <h1>🏎 Racing Performance Analyzer</h1>
      <LapSummary data={telemetryData} />
      <DriverInsights data={telemetryData} />
    </div>
  );
}

export default App;
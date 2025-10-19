import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import DriverInsights from "./components/DriverInsights";

export default function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <FileUpload onDataLoaded={setData} />
      {data && <DriverInsights data={data} />}
    </div>
  );
}
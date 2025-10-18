// src/components/FileUploader.jsx
import React from 'react';

export default function FileUploader({ onFileUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />
    </div>
  );
}
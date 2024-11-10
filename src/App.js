import React from 'react';
import FileUploader from './components/FileUploader';
import './App.css'; // Add custom styles

function App() {
  return (
    <div className="App">
      <h1 className="title">File Harmful Detector</h1>
      <FileUploader />
    </div>
  );
}

export default App;

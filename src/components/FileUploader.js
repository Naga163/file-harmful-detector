import React, { useState } from 'react';
import './FileUploader.css'; // Add custom styles

const FileUploader = () => {
  const [fileName, setFileName] = useState('');
  const [message, setMessage] = useState('');
  const [isHarmful, setIsHarmful] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      const harmfulKeywords = ['virus', 'malware', 'suspicious'];
      const isHarmfulKeyword = harmfulKeywords.some((keyword) =>
        file.name.toLowerCase().includes(keyword)
      );
      const isPdfOrCsv = file.name.toLowerCase().endsWith('.pdf') || file.name.toLowerCase().endsWith('.csv');

      if (isHarmfulKeyword || isPdfOrCsv) {
        setMessage(`Warning: The file "${file.name}" is potentially harmful!`);
        setIsHarmful(true);

        // Play warning sound
        const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
        audio.play();
      } else {
        setMessage(`The file "${file.name}" appears safe.`);
        setIsHarmful(false);
      }
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileChange} />
      {fileName && (
        <p className={`message ${isHarmful ? 'harmful' : 'safe'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default FileUploader;
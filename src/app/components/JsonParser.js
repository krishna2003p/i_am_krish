// components/JsonParser.js
"use client";
// components/JsonParser.js
import { useState } from 'react';

export default function JsonParser() {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);

  // Handle change in input
  const handleInputChange = (event) => {
    setJsonInput(event.target.value);
  };

  // Try to parse the string as JSON, and fallback to raw string if invalid
  const parseJson = () => {
    try {
      // Try parsing the input to JSON
      console.log("Before Parsed Data");
      console.log(jsonInput);
      const data = JSON.parse(jsonInput);
      console.log("Parsed Data");
      console.log(data);
      setParsedData(data); // Store parsed JSON data
      setError(null); // Clear error if valid JSON
    } catch (err) {
      // If JSON parsing fails, treat it as a regular string
      setParsedData(jsonInput); // Store the raw string
      setError('Invalid JSON format'); // Show error message
    }
  };

  return (
    <div>
      <h2>JSON Parser</h2>
      <textarea
        value={jsonInput}
        onChange={handleInputChange}
        rows="10"
        cols="50"
        placeholder="Paste your JSON or plain text here"
      ></textarea>
      <br />
      <button onClick={parseJson}>Parse JSON</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <h3>Parsed Data:</h3>
        <pre>{parsedData ? parsedData : 'No data'}</pre>
      </div>
    </div>
  );
}

// JSON.stringify(parsedData, null, 2)
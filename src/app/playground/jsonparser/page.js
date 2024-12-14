"use client";

import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function JsonFormatter() {
  const [jsonInput, setJsonInput] = useState(""); // Input JSON state
  const [error, setError] = useState(null); // Error state
  const router = useRouter(); // Hook for navigation

  const handleInputChange = (event) => {
    const input = event.target.value;
    setJsonInput(input);

    try {
      JSON.parse(input); // Try to parse JSON
      setError(null); // Clear error
    } catch (err) {
      setError("Invalid JSON");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6 relative">
        {/* Back Arrow */}
        <button
          onClick={() => router.back()} // Navigate back
          className="absolute top-4 left-4 flex items-center text-gray-700 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          JSON Formatter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input JSON Box */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Input</h3>
            <textarea
              value={jsonInput}
              onChange={handleInputChange}
              rows="20"
              placeholder="Paste your unformatted JSON here..."
              className="w-full border rounded-lg p-4 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none overflow-auto"
            ></textarea>
          </div>

          {/* Output JSON Box */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Formatted Output</h3>
            <div
              className="w-full border rounded-lg p-4 bg-gray-100 shadow-inner overflow-auto"
              style={{ height: "500px" }} // Fixed height with scroll
            >
              {error ? (
                <p className="text-red-500 font-semibold">{error}</p>
              ) : jsonInput.trim() ? (
                <SyntaxHighlighter
                  language="json"
                  style={atomOneLight} // Colorful theme
                  wrapLongLines={true}
                >
                  {JSON.parse(jsonInput)} {/* Format JSON */}
                </SyntaxHighlighter>
              ) : (
                <p className="text-gray-500 italic">Output will appear here...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

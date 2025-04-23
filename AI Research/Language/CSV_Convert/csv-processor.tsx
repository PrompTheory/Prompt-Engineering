import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const CSVProcessor = () => {
  const [file, setFile] = useState(null);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [markdownOutput, setMarkdownOutput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Process the uploaded CSV file
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;
    
    setFile(uploadedFile);
    setError('');
    setColumns([]);
    setData([]);
    setSelectedColumn('');
    setMarkdownOutput('');
    setIsLoading(true);
    
    Papa.parse(uploadedFile, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          setError(`Error parsing CSV: ${results.errors[0].message}`);
          setIsLoading(false);
          return;
        }
        
        if (results.data.length === 0) {
          setError('The CSV file appears to be empty.');
          setIsLoading(false);
          return;
        }
        
        const headers = results.meta.fields || [];
        setColumns(headers);
        setData(results.data);
        if (headers.length > 0) {
          setSelectedColumn(headers[0]);
        }
        setIsLoading(false);
      },
      error: (error) => {
        setError(`Error reading file: ${error.message}`);
        setIsLoading(false);
      }
    });
  };

  // Generate Markdown output when a column is selected
  useEffect(() => {
    if (!selectedColumn || data.length === 0) return;
    
    try {
      // Generate the Markdown list
      const list = data
        .map(row => row[selectedColumn])
        .filter(item => item !== null && item !== undefined && item !== '')
        .map(item => `- ${item}`)
        .join('\n');
      
      // Generate the Markdown table
      const tableHeader = `| ${selectedColumn} |\n|---|\n`;
      const tableRows = data
        .map(row => row[selectedColumn])
        .filter(item => item !== null && item !== undefined && item !== '')
        .map(item => `| ${item} |`)
        .join('\n');
      
      const markdown = `## Markdown List\n\n${list}\n\n## Markdown Table\n\n${tableHeader}${tableRows}`;
      setMarkdownOutput(markdown);
    } catch (err) {
      setError(`Error generating Markdown: ${err.message}`);
    }
  }, [selectedColumn, data]);

  // Copy Markdown to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownOutput)
      .then(() => {
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy to Clipboard';
        }, 2000);
      })
      .catch(err => {
        setError(`Failed to copy: ${err.message}`);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">CSV Processor</h2>
        
        {/* File Upload */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Upload CSV File</label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="block w-full text-sm border border-gray-300 rounded p-2"
          />
        </div>
        
        {isLoading && <p className="text-blue-600">Loading...</p>}
        
        {/* Column Selection */}
        {columns.length > 0 && (
          <div className="mb-6">
            <label className="block mb-2 font-medium">Select Column</label>
            <select
              value={selectedColumn}
              onChange={(e) => setSelectedColumn(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {columns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
          </div>
        )}
        
        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded mb-4">
            {error}
          </div>
        )}
      </div>
      
      {/* Markdown Output */}
      {markdownOutput && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Markdown Output</h2>
            <button
              id="copyBtn"
              onClick={copyToClipboard}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Copy to Clipboard
            </button>
          </div>
          <pre className="bg-gray-50 p-4 rounded overflow-auto max-h-96 whitespace-pre-wrap">
            {markdownOutput}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CSVProcessor;
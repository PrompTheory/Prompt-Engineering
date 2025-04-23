import { useState } from 'react';
import Papa from 'papaparse';

const CSVViewer = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setIsLoading(true);
      
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setData(results.data);
          setColumns(results.meta.fields);
          if (results.meta.fields && results.meta.fields.length > 0) {
            setSelectedColumn(results.meta.fields[0]);
          }
          setIsLoading(false);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          setIsLoading(false);
        }
      });
    }
  };

  const handleColumnChange = (event) => {
    setSelectedColumn(event.target.value);
  };

  const renderMarkdownList = () => {
    if (!data.length || !selectedColumn) return null;

    const listItems = data.map((row, index) => `- ${row[selectedColumn]}`).join('\n');
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Markdown List</h3>
        <div className="bg-gray-100 p-4 rounded-md">
          <pre className="whitespace-pre-wrap">{listItems}</pre>
        </div>
      </div>
    );
  };

  const renderTable = () => {
    if (!data.length || !selectedColumn) return null;

    return (
      <div className="mt-4 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-2">Table View</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {selectedColumn}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row[selectedColumn]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-pink-500 mb-6">✨ Super Cute CSV Viewer ✨</h2>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="csvFile">
          Upload your CSV file:
        </label>
        <input
          className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-pink-50 file:text-pink-600
                    hover:file:bg-pink-100"
          id="csvFile"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
        />
      </div>

      {isLoading && (
        <div className="flex justify-center items-center my-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-pink-500"></div>
        </div>
      )}

      {columns.length > 0 && (
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="columnSelect">
            Select a column to display:
          </label>
          <select
            id="columnSelect"
            value={selectedColumn}
            onChange={handleColumnChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          >
            {columns.map((column) => (
              <option key={column} value={column}>
                {column}
              </option>
            ))}
          </select>
        </div>
      )}

      {fileName && (
        <div className="text-sm text-gray-600 mb-4">
          <span className="font-medium">File loaded:</span> {fileName}
        </div>
      )}

      {data.length > 0 && selectedColumn && (
        <div className="mt-8">
          <div className="border-t border-gray-200 pt-4">
            {renderMarkdownList()}
            {renderTable()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CSVViewer;
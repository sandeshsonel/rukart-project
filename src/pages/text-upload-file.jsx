import React, { useState } from "react";
import Pagination from "./pagination";

const TextFileUpload = () => {
  const [rawLines, setRawLines] = useState([]);
  const [delimiter, setDelimiter] = useState(",");
  const [numberOfLinesPerPage, setNumberOfLinesPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  let showFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onload = (e) => {
      let lines = e.target.result.split("\n");
      setRawLines(lines);
    };
    reader.readAsText(e.target.files[0]);
  };

  //get current rawLines
  let indexOfLastPage = currentPage * numberOfLinesPerPage;
  let indexOfFirstPage = indexOfLastPage - numberOfLinesPerPage;
  let linesForCurrentPage = rawLines.slice(indexOfFirstPage, indexOfLastPage);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-5 pb-4 px-2 max-w-4xl mx-auto">
      <div>
        <h1 className="pb-6 lg:text-3xl text-xl font-semibold">Tool to display text into a table</h1>

        <label className="">
          <div className="px-2 py-2 rounded-sm cursor-pointer border border-gray-400 shadow-sm inline-block">
            <span className="text-gray-700">Please select the txt file...</span>
            <span className="px-2 py-1 text-sm rounded-sm text-white ml-2 bg-blue-600">Browse</span>
          </div>
          <input
            type="file"
            className="hidden"
            accept=".txt"
            onChange={(e) => showFile(e)}
            onClick={(event) => {
              event.target.value = null;
            }}
          />
        </label>
      </div>

      {rawLines.length !== 0 && (
        <div>
          <div className="flex space-x-4 mt-10">
            <div className="lg:flex items-center w-full">
              <h1>Delimiter:</h1>
              <input
                className="bg-gray-200 outline-none border border-gray-400 rounded px-2 py-2 w-full lg:ml-2  focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                type="text"
                onChange={(e) => setDelimiter(e.target.value ? e.target.value : ",")}
              />
            </div>
            <div className="lg:flex items-center w-full">
              <h1>No. of Lines:</h1>
              <input
                className="bg-gray-200 outline-none border border-gray-400 rounded  px-2 py-2 w-full lg:ml-2 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                type="number"
                onChange={(e) => setNumberOfLinesPerPage(e.target.value ? e.target.value : 2)}
              />
            </div>
          </div>
          <div className="sm:-mx-8 sm:px-8 overflow-x-auto mt-4">
            <div className="inline-block min-w-full rounded h-auto">
              <table className="leading-normal w-full">
                <thead>
                  <tr className="text-left">
                    <th className="lg:px-5 w-1/2 px-3 py-3  bg-gray-200 text-left text-sm font-bold text-gray-700">Name</th>
                    <th className="lg:px-5 w-1/4 px-3 py-3  bg-gray-200 text-left text-sm font-bold text-gray-700">Street</th>
                    <th className="lg:px-5 w-1/4 px-3 py-3  bg-gray-200 text-left text-sm font-bold text-gray-700">City</th>
                    <th className="lg:px-5 w-1/4 px-3 py-3  bg-gray-200 text-left text-sm font-bold text-gray-700">Country</th>
                  </tr>
                </thead>
                <tbody>
                  {linesForCurrentPage.map(
                    (line, idx) =>
                      idx < numberOfLinesPerPage && (
                        <tr key={idx}>
                          {line.split(delimiter).map((word) => (
                            <td className="lg:px-5 px-3 py-2 border border-gray-200 bg-white text-sm">{word}</td>
                          ))}
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <Pagination linesPerPage={numberOfLinesPerPage} currentPage={currentPage} totalLines={rawLines.length} paginate={paginate} />
            <button
              onClick={() => {
                setRawLines([]);
              }}
              className="bg-blue-600 px-4 py-2 float-right text-white rounded hover:bg-blue-700 mt-4"
            >
              Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextFileUpload;

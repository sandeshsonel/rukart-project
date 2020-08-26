import React, { useState, useEffect } from "react";

const TextFileUpload = () => {
  const [readedLines, setReadedLines] = useState([]);
  const [delimiter, setDelimiter] = useState(",");
  const [numberOfLines, setNumberOfLines] = useState(Infinity);

  useEffect(() => {}, []);

  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      let lines = e.target.result.split("\n");
      setReadedLines(lines);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-5">
      {readedLines.length === 0 && (
        <label className="">
          <span className="px-2 py-2 inline-block rounded-sm cursor-pointer text-white bg-blue-500 hover:bg-blue-600">Upload</span>

          <input type="file" className="hidden" accept=".txt" onChange={(e) => showFile(e)} />
        </label>
      )}
      <div className="flex space-x-3 mt-6">
        <div className="flex items-center w-full">
          <h1>Delimiter:</h1>
          <input className="bg-gray-100 px-2 py-2 w-full ml-2" type="text" onChange={(e) => setDelimiter(e.target.value ? e.target.value : ",")} />
        </div>
        <div className="flex items-center w-full">
          <h1>Lines:</h1>
          <input className="bg-gray-100 px-2 py-2 w-full ml-2" type="text" onChange={(e) => setNumberOfLines(e.target.value ? e.target.value : Infinity)} />
        </div>
      </div>
      <div class="sm:-mx-8 sm:px-8 overflow-x-auto mt-4">
        <div class="inline-block min-w-full rounded h-auto">
          <table className="leading-normal w-full">
            <thead>
              <tr className="text-left">
                <th class="lg:px-5 w-1/2 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700">Name</th>
                <th class="lg:px-5 w-1/4 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700">Street</th>
                <th class="lg:px-5 w-1/4 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700">City</th>
                <th class="lg:px-5 w-1/4 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-bold text-gray-700">Country</th>
              </tr>
            </thead>
            <tbody>
              {readedLines.map(
                (line, idx) =>
                  idx < numberOfLines && (
                    <tr key={idx}>
                      {line.split(delimiter).map((word) => (
                        <td className="lg:px-5 px-3 py-2 border-b border-gray-200 bg-white text-sm">{word}</td>
                      ))}
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
        <div>
          <div className="text-center mt-4">
            <nav class="relative z-0 inline-flex shadow-sm">
              <a
                href="#"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Previous"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                1
              </a>
              <a
                href="#"
                class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                2
              </a>
              <a
                href="#"
                class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                3
              </a>
              <span class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                8
              </a>
              <a
                href="#"
                class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                9
              </a>
              <a
                href="#"
                class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                10
              </a>
              <a
                href="#"
                class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Next"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFileUpload;

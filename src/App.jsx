// import React from "react";

function App() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <h1>Count is: </h1>
      </div>
      <div className="flex w-16 justify-between">
        <button className="w-5 h-5 rounded border border-gray-500 flex flex-row justify-center items-center">
          -
        </button>
        <button className="w-5 h-5 rounded border border-gray-500 flex flex-row justify-center items-center">
          +
        </button>
      </div>
    </div>
  );
}

export default App;

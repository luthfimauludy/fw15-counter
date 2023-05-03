// import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <h1>Count is: {count}</h1>
      </div>
      <div className="flex w-16 justify-between">
        <button
          className="w-5 h-5 rounded border border-gray-500 flex flex-row justify-center items-center"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <button
          className="w-5 h-5 rounded border border-gray-500 flex flex-row justify-center items-center"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;

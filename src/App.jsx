// import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const handleCountSum = () => {
    if (count === 10) {
      setError("Max 10");
    } else {
      setError("");
      setCount(count + 1);
    }
  };

  const handleNumberMin = () => {
    if (count === 0) {
      setError("Failed");
    } else {
      setError("");
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-600 gap-5">
      <div>
        <h1>Count is: {count}</h1>
      </div>
      <div>
        <h1>{error}</h1>
      </div>
      <div className="flex w-32 justify-between">
        <button
          className="w-10 h-10 rounded border border-black flex flex-row justify-center items-center"
          onClick={handleNumberMin}
        >
          -
        </button>
        <button
          className="w-10 h-10 rounded border border-black flex flex-row justify-center items-center"
          onClick={handleCountSum}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;

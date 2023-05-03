import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState("");

  function handleCountSum() {
    if (count === 10) {
      setError("Max 10");
    } else {
      setError("");
      setCount(count + 1);
    }
  }

  const handleCountMin = () => {
    if (count === 0) {
      setError("Failed");
    } else {
      setError("");
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>Count is: {count}</div>
      <div>
        <h1>{error}</h1>
      </div>
      <div className="flex w-32 justify-between">
        <button
          className="w-10 h-10 rounded border border-black flex flex-row justify-center items-center"
          onClick={handleCountMin}
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
    </>
  );
}

export default Counter;

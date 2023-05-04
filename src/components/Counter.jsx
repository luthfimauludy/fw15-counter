import React from "react";

function Counter(props) {
  const [count, setCount] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
      setErrorMessage("");
    } else {
      setErrorMessage("The minimum number is 0");
    }
  }

  function increment() {
    if (count < 10) {
      setCount(count + 1);
      setErrorMessage("");
    } else {
      setErrorMessage("The maximum number is 10");
    }
  }

  const { onChangeNumber } = props;

  React.useEffect(() => {
    function changeNumber(num) {
      onChangeNumber(num);
    }
    changeNumber(count);
  }, [count, onChangeNumber]);

  return (
    <>
      <div className="text-xl font-semibold text-red-700">{errorMessage}</div>
      <div className="flex gap-5">
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}

Counter.propTypes = {
  onChangeNumber: "function",
};

export default Counter;

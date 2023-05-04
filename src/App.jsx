import Counter from "./components/Counter";
import React from "react";

function App() {
  const [number, setNumber] = React.useState(0);
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-2 bg-gray-400">
      <div className="text-4xl text-black">{number}</div>
      <Counter onChangeNumber={setNumber} />
    </div>
  );
}

export default App;

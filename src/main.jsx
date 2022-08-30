import React from "react";
import ReactDOM from "react-dom/client";
import useState from "./hook/useState";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>count1 is {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>count2 is {count2}</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

export function render() {
  root.render(<App />);
}

render();

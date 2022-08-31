import React from "react";
import ReactDOM from "react-dom/client";
import useState from "./hook/useState";
import useMemo from "./hook/useMemo";
import useEffect from "./hook/useEffect";

window.hookStates = [];
window.hookIndex = 0;

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const doubleCount1 = useMemo(() => count1 * 2, [count1]);

  useEffect(() => {
    console.log(`count1 change`);
  }, [count1]);

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>count1 is {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>count2 is {count2}</button>
      <div>Double count1: {doubleCount1}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

export function render() {
  window.hookIndex = 0;
  root.render(<App />);
}

render();

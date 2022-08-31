import React from "react";
import ReactDOM from "react-dom/client";
import useState from "./hook/useState";
import useMemo from "./hook/useMemo";
import useEffect from "./hook/useEffect";
import useLayoutEffect from "./hook/useLayoutEffect";
import useCallback from "./hook/useCallback";
import useRef from "./hook/useRef";
import useContext from "./hook/useContext";

window.hookStates = [];
window.hookIndex = 0;

function Child(props) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div>theme: {theme}</div>
      <button onClick={props.handleClick}>click child</button>
    </div>
  );
}

const ChildMemo = Child;

const ThemeContext = React.createContext();

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [theme, setTheme] = useState("light");

  const buttonRef = useRef();

  const doubleCount1 = useMemo(() => count1 * 2, [count1]);

  const handleClick = useCallback(() => {
    console.log(`handle click`);
  }, [count1]);

  const changeTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    console.log(`count1 useEffect`);
  }, [count1]);

  useLayoutEffect(() => {
    console.log(`count1 useLayoutEffect`);
  }, [count1]);

  return (
    <div className="App">
      <div>{theme}</div>
      <button onClick={() => setCount1(count1 + 1)}>count1 is {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>count2 is {count2}</button>
      <div>Double count1: {doubleCount1}</div>
      <button ref={buttonRef} onClick={changeTheme}>
        change theme
      </button>
      <ThemeContext.Provider value={theme}>
        <ChildMemo handleClick={handleClick}></ChildMemo>
      </ThemeContext.Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

export function render() {
  window.hookIndex = 0;
  root.render(<App />);
}

render();

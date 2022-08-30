import { render } from "../../main";

const useState = (initialState) => {
  let currentIndex = hookIndex;
  hookStates[currentIndex] = hookStates[hookIndex] || initialState;
  const setState = (newState) => {
    hookStates[currentIndex] = newState;
    render(); // setState 之後重新渲染，重新執行函式組件
  };
  return [hookStates[hookIndex++], setState];
};

export default useState;

import { render } from "../../main";

let hookStates = []; // 保存hook狀態
let index = 0; // 作為hookStates index

const useState = (initialState) => {
  let currentIndex = index;
  hookStates[currentIndex] = hookStates[index] || initialState;
  const setState = (newState) => {
    hookStates[currentIndex] = newState;
    index = 0;
    render(); // setState 之後重新渲染，重新執行函式組件
  };
  return [hookStates[index++], setState];
};

export default useState;

function useRef(value) {
  hookStates[hookIndex] = hookStates[hookIndex] || { current: value };
  return hookStates[hookIndex++];
}

export default useRef;

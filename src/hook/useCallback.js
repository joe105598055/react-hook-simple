function useCallback(callback, deps) {
  if (hookStates[hookIndex]) {
    let [lastCallback, lastDeps] = hookStates[hookIndex];

    let same = false;
    same = deps.every((item, index) => item === lastDeps[index]);
    if (same) {
      hookIndex++;
      return lastCallback; // 返回緩存callback
    } else {
      hookStates[hookIndex++] = [callback, deps];
      return callback;
    }
  } else {
    hookStates[hookIndex++] = [callback, deps];
    return callback;
  }
}

export default useCallback;

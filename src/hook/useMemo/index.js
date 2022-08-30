function useMemo(factory, deps) {
  if (hookStates[hookIndex]) {
    // 已緩存
    let [lastMemo, lastdeps] = hookStates[hookIndex];
    // 比較deps是否有變化，沒有則返回原來的緩存結果; 有則重新執行factory，返回結果並緩存結果。
    const same = deps.every((item, index) => item === lastdeps[index]);
    if (same) {
      hookIndex++;
      return lastMemo;
    } else {
      let newMemo = factory();
      hookStates[hookIndex++] = [newMemo, deps];
      return newMemo;
    }
  } else {
    // 未緩存過
    let newMemo = factory();
    hookStates[hookIndex++] = [newMemo, deps]; // 將結果緩存在hookStates
    return newMemo;
  }
}

export default useMemo;

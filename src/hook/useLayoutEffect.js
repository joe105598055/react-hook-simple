function useLayoutEffect(callback, deps) {
  if (hookStates[hookIndex]) {
    // 有緩存
    let [lastDestory, lastdeps] = hookStates[hookIndex];
    let same = false;
    //  有deps才進行依賴比較，否則每次執行effect callback
    if (lastdeps) {
      same = deps.every((item, index) => item === lastdeps[index]);
    }
    if (same) {
      hookIndex++;
    } else {
      lastDestory && lastDestory();
      // 建立micro task
      queueMicrotask(() => {
        const destory = callback();
        hookStates[hookIndex++] = [destory, deps];
      });
    }
  } else {
    // 未緩存過
    queueMicrotask(() => {
      const destory = callback();
      hookStates[hookIndex++] = [destory, deps];
    });
  }
}

export default useLayoutEffect;

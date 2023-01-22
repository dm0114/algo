function solution(n, words) {
  let tmp = words[0][0]
  const ans = [0, 0];
  const dict = {};

  words.some((v, i) => {
    return dict[v]
      ? (() => {
          ans[0] = (i % n) + 1;
          ans[1] = Math.floor(i / n) + 1;
          return true;
        })()
      : (() => {
          dict[v] = (i % n) + 1;
          return false;
        })() || tmp !== v[0]
      ? (() => {
          ans[0] = (i % n) + 1;
          ans[1] = Math.floor(i / n) + 1;
          return true;
        })()
      : (() => {
          tmp = v[v.length-1]
          return false;
        })();

  }, "");

  return ans;
}
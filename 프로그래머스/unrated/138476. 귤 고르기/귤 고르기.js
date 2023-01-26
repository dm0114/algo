function solution(k, tangerine) {
  let LEN = tangerine.length - k
  const dict = {}
  tangerine.forEach(v => !dict[v] ? dict[v] = 1 : dict[v] += 1)

  const ans = Object.entries(dict).sort(([, a], [, b]) => a - b);

  while (LEN !== 0) {
    if (ans[0][1] <= LEN) {
      LEN -= ans[0][1]
      ans.shift()
    }
    else break
  }
  return ans.length;
}
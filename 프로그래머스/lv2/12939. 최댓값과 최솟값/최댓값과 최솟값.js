function solution(s) {
  const ans = s.split(' ').sort((a, b) => a - b)
  return [ans[0], ans[ans.length - 1]].join(' ');
}

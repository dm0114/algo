function solution(clothes) {
  const ans = {}
  clothes.forEach((v) => ans[v[1]] ? ans[v[1]] += 1 : ans[v[1]] = 1);

  return Object.values(ans).reduce((p, v) => p * (v+1), 1) - 1;
}
function solution(a, b) {
  return a.reduce((p, v, i) => p + (v * b[i]), 0)
}
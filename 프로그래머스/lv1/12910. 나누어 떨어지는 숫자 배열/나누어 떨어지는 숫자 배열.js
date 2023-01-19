function solution(arr, divisor) {
  const ans = arr.sort((a, b) => a - b).filter(v => !(v % divisor))
  return ans.length ? ans : [-1];
}
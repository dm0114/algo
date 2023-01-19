function solution(n) {
  return Array.from(Array(n), (_, i) => i % 2 ? '박' : '수').join('')
}
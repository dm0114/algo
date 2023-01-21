function solution(n) {
  const LEN = n.toString(2).split('0').join('').length
  let i = n+1
  while (LEN !== i.toString(2).split('0').join('').length) {
    i++
  }
  return i;
}

function solution(s) {
  return s
    .split(' ')
    .map((v) =>
      v.split('').map((v2, i) => (i % 2 ? v2.toLowerCase() : v2.toUpperCase()))
    )
    .map((v3) => v3.join(''))
    .join(' ');
}

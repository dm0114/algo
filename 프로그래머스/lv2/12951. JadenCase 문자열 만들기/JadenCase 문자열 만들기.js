function solution(s) {
  return s.split(' ').map(v => v.toLowerCase().replace(/\b[a-z]/g, char => char.toUpperCase())).join(' ');
}
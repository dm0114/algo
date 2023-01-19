function solution(absolutes, signs) {
  return absolutes.reduce((p, v, i) =>  p + (signs[i] ? v : -v), 0);
}

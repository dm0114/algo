function solution(absolutes, signs) {
  return absolutes.reduce((p, v, i) => {return p + (signs[i] ? v : -v)}, 0);
}
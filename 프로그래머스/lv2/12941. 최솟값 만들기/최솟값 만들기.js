function solution(A,B){
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)

  return A.reduce((p, v, i) => {return (v * B[i]) + p}, 0);
}
function solution(arr) {  
  const MIN = Math.min(...arr)
  return arr.length !== 1 ? arr.filter(v => MIN !== v) : [-1]
}
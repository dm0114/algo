function solution(d, budget) { 

  return d.sort((a, b) => a - b).filter(v => {   
    return budget - v > -1 && (() => {
      budget -= v
      return true
    })()
  }).length
}
function solution(numbers) {
  let answer = new Set();

  const dfs = (lv, st, sum) => {
    if (lv === 2) return  answer.add(sum)
    for (let i = st; i < numbers.length; i++) {
      dfs(lv+1, i+1, sum+numbers[i])
    }
  }
  
  dfs(0, 0, 0)
  return [...answer].sort((a, b) => a - b);
}
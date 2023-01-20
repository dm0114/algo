function solution(nums) {
  let ans = 0
  const n = 3000
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  const dfs = (lv, sum, st) => {
    if (lv === 3) return arr[sum] ? ans += 1 : null

    for (let i = st; i < nums.length; i++) {
      dfs(lv+1, sum+nums[i], i+1)
    }
  }
  dfs(0, 0, 0)

  return ans
}
function solution(s) {
  const ans = [0, 0]
  
  while (s !== '1') {
    const tmp = s.split('0').join('').length
    ans[1] += s.length - tmp
    s = tmp.toString(2)
    ans[0]++;
  }
    
  return ans;
}

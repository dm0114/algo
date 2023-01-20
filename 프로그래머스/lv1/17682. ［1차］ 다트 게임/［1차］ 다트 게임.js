function solution(dartResult) {
  let count = 0;
  const regex = /[^0-9]/g, regex2 = /[0-9]/g;
  const ans = dartResult.replace(regex, " ").split(' ').filter(v => v !== '').map(v => +v);

  dartResult.replace(regex2, "").split('').forEach(v => {
    if (v === 'S' || v === 'D' || v ==='T') {
      switch(v) {
        case 'D':
          ans[count] **= 2
          break
        case 'T':
          ans[count] **= 3
          break
      }
      count ++
    }
    else v === '*' ? (() => {ans[count-1] *= 2; ans[count-2] *= 2})() : ans[count-1] *= -1
  })

  return ans.reduce((p, v) => p + v, 0);
}
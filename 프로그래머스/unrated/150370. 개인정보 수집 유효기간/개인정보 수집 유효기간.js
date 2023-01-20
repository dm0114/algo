function solution(today, terms, privacies) {
  const ans = []
  let tday = new Date(today.replace(/\./g, '-'))

  const term = {}
  terms.forEach(v => {
    term[v[0]] = +v.match(/\d.?.?/g)
  })

  privacies.forEach((v, i) => {
    const tmp = v.split(' ')
    const tmpDate = new Date(tmp[0].replace(/\./g, '-'))
    tmpDate.setMonth(tmpDate.getMonth() + term[tmp[1]]);
    tmpDate.setDate(tmpDate.getDate() - 1 === 0 
    ? (() => {
        tmpDate.setMonth(tmpDate.getMonth() - 1);
        return 28
      })() 
    : tmpDate.getDate() - 1);

    tmpDate < tday ? ans.push(i+1) : null
  })

  return ans;
}
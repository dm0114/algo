// 우선, 97이상일 경우와 65이상일 경우만 고려
// 이후 더해주고 처리

function solution(s, n) {
  return s.split('').map(v => v !== " " 
    ? String.fromCharCode(
      (() => {
        let tmp = v.charCodeAt(v)
        if (tmp >= 97) return (tmp + n) > 122 ? (tmp + n) % 122 + 96 : tmp + n
        return (tmp + n) > 90 ? (tmp + n) % 90 + 64 : tmp + n
      })()
      ) 
    : ' ' ).join('');
}
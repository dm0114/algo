function solution(s, n) {
  return s.split('').map(v => v !== " " ? String.fromCharCode(
    (() => {
      let tmp = v.charCodeAt(v)
      if (tmp >= 97) return (tmp + n) > 122 ? (tmp + n) % 122 + 96 : tmp + n
      return (tmp + n) > 90 ? (tmp + n) % 90 + 64 : tmp + n
    })()
  ) : ' ' ).join('');
}
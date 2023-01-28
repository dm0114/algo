function solution(s) {
  const stack = []
  s.split("").forEach(v => {
    stack.push(v)
    
    while (
      stack.length >= 2 &&
      stack[stack.length - 1] === stack[stack.length - 2]
    ) {
      stack.pop();
      stack.pop();
    }
  })
  return stack.length === 0 ? 1 : 0;
}
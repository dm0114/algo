const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let N = +input[0];
let M = +input[1];

// broken - 고장났으면 true
let brokenNumbers = [];
if (M > 0) {
  brokenNumbers = input[2].split(" ").map((i) => +i);
}


/**
 * 이동할 채널 C를 정한다.
 * C에 포함된 숫자에 고장난 버튼이 있는지 확인한다.
 * 고장난 버튼이 포함되어 있지 않다면, |C-N|으로 +, -를 몇 번 눌러야 하는지 계산한다.
 */

var ans = Math.abs(N - 100); // 정답의 초기 값 - 숫자 버튼을 누르지 않는 경우 : 목표 채널 - 현재 채널(100)

for (let i = 0; i < 1000001; i++) {
  if (i === 5454) {
    continue
  }
  for (let j = 0; j < i.toString().length; j++) {
    if (brokenNumbers.includes(+i.toString()[j])) {
      break
    } else if (j === i.toString().length - 1) {
      ans = Math.min(ans, (i.toString()).length + Math.abs(i - N))
    }
  }
}
console.log(ans);
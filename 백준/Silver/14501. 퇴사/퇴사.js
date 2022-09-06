const fs = require("fs");
const path = require("path");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(el => el.split(' ').map(el => +el));
const T = +input[0]
let MAX = 0;

// 조건 처리에 주의하기
function rec(index, ssum) {
  if (index === T+1) {
    if (MAX < ssum) {
      MAX = ssum
    }
    return
  }
  else if (index > T+1) {
    return
  }
  rec(index + input[index][0], ssum + input[index][1])
  rec(index + 1, ssum)
}

(function solution() {
  rec(1, 0)
  console.log(MAX);
})();

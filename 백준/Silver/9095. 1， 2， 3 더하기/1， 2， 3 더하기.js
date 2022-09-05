const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map((el) => +el);
let ans = 0;
const T = input[0]


function rec(ssum, target) {
  if (ssum > target) {
    return
  }
  else if (ssum === target) {
    ans++
    return
  }
  else {
    for (let i = 1; i <= 3; i++) {
      rec(ssum+i, target)
  }}
}

(function solution() {
  for (let i = 1; i <= T; i++) {
    ans = 0;
    rec(0, input[i])
    console.log(ans)
  }
})();

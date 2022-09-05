const fs = require("fs");
const path = require("path");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(el => el.split(' '));
const L = +input[0][0];
const C = +input[0][1];
const arr = input[1].sort();

function check(path) {
  let ja = 0;
  let mo = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'a' || path[i] === 'e' || path[i] === 'i' || path[i] === 'o' || path[i] === 'u') {
      mo++
    } else {
      ja++
    }
  }
  if (mo >= 1 && ja >= 2) {
    return true
  } else {
    return false
  }
}

function rec(path, st) {
  if (path.length === L) {
    if (check(path)) {
      console.log(path.join(''))
    }
    return
  }
  for (let i = st; i < arr.length; i++) {
    if (!path.includes(arr[i])) {
      rec([...path, arr[i]], i+1)
    }
    
  }
}

(function solution() {
  rec([], 0)
})();

/**
 * 이동할 채널 C를 정한다.
 * C에 포함된 숫자에 고장난 버튼이 있는지 확인한다.
 * 고장난 버튼이 포함되어 있지 않다면, |C-N|으로 +, -를 몇 번 눌러야 하는지 계산한다.
 */
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let N = +input[0];
let M = +input[1];

// broken - 고장났으면 true
let brokenNumbers = [];
if (M > 0) {
  brokenNumbers = input[2].split(" ").map((i) => +i);
}

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 시간 초과
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let N = +input[0];
let M = +input[1];

// broken - 고장났으면 true
const broken = new Array(10).fill(false);
let brokenNumbers = [];
if (M > 0) {
  brokenNumbers = input[2].split(" ").map((i) => +i);
}
for (i of brokenNumbers) {
  broken[i] = true;
}

// 이동 가능한 채널인가? - C의 숫자 길이 or 0
const possible = (C) => {
  if (C === 0) {                // 0일때
    if (broken[0]) {            // 고장났으면 리턴 0
      return 0;
    } else {                    // 고장 안났으면 리턴 1 (바로 이동 가능)
      return 1;
    }
}
  let len = 0;
  while (C > 0) {
    if (broken[C % 10]) {       // 한 자리씩 검사해가면서 고장난 수라면 return 0
      return 0;                 // 고장난 버튼이 있으면 불가능
    }
    len += 1;
    C /= 10
  }
  return len;                   // 고장난 수가 없다면 숫자 길이 리턴
};


var ans = Math.abs(N - 100); // 정답의 초기 값 - 숫자 버튼을 누르지 않는 경우 : 목표 채널 - 현재 채널(100)

for (let i = 0; i < 1000001; i++) {
  var C = i;                //  이동할 채널 C
  
  let len = possible(C);    // 이동 가능한가?

  if (len > 0) {
    var press = Math.abs(C - N);    // + 버튼 또는 - 버튼을 누를 횟수
    if (ans > len + press) {        // 최솟값 갱신
      ans = len + press;
    }
  }
}
console.log(ans);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//오답
/**
 * 1.1 이동하려는 채널 N의 자릿수보다 위, 아래로 이동할 떄의 depth가 작으면 위 아래로 이동
 * 1.2 아니라면 2.0으로
 *
 * 2.1 remainNumbers의 조합의 최솟값
 */
 const fs = require("fs");
 const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
 let N = +input[0];
 let M = +input[1];
 
 const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 let MIN = 1000000
 let selectedNumbers = []
 let brokenNumbers = []

 function dfs(N, level, len, remainNumbers, path) {
    let tmp = Math.abs(N - (+path.join(''))) + path.length
    if (MIN > tmp) {
        MIN = tmp
        selectedNumbers = path
    }

    if (level == len) {
        return
    }

    else {
        for (let i = 0; i < remainNumbers.length; i++) {
            dfs(N, level+1, len, remainNumbers, [...path, remainNumbers[i]])
        }
    }
 }

 console.log((function solution() {
    let now = 100
    let ans = 0
    const len = input[0].trim().length

    let N = +input[0]
    let M = +input[1]

    if (M !== 0) {
        brokenNumbers = input[2].split(' ').map(i => +i)
    } else {
        brokenNumbers = []
    }
    const remainNumbers = numbers.filter((number) => {
        return !(brokenNumbers.includes(number))
    })

    if (now === N) {
        return ans
    }
    else if (len >= Math.abs(N - now)) {
        return Math.abs(N - now)
    }
    else if (M === 10) {
        return Math.abs(N - now)
    }
    else {
        //remainNumbers의 조합의 최솟값
        dfs(N, 0, len, remainNumbers, [])
        if (+selectedNumbers.join('') === 0) {
            ans += 1
        }
        else {ans += selectedNumbers.length}
        ans += Math.abs(N - +selectedNumbers.join(''))
    }
    return Math.min(ans, Math.abs(N - now))
 })())

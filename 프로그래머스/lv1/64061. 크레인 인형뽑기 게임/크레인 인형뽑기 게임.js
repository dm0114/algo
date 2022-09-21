
function solution(board, moves) {
  let answer = 0
  const bucket = []
  const Y = board.length
  const X = board[0].length
  const NewBoard = Array.from(Array(Y), () => new Array())

  moves = moves.map((el) => --el)


  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (board[y][x] !== 0) {
        NewBoard[x].push(board[y][x])
      }
    }
  }
  
  let tmp;
  for (el of moves) {
    tmp = NewBoard[el].shift()
    if (tmp !== undefined) {
      bucket.push(tmp)
    }
  }


  let i = 0

  while (i < bucket.length-1) {
    if (bucket[i] === bucket[i+1]) {
      bucket.splice(i, 2)
      answer += 2
      i = -1
    }
    i++
  }
  return answer;
}
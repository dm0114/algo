function solution(board) {
  let ans = 0;
  const N = board.length;
  const BN = board[0].length;

  for (let i = 0; i < N ; i++) {
    if (board[i][0] === 1) {
      ans = 1 
      break
    }
  }
  ans = board[0].some(v => v === 1) ? 1 : ans

  for (let y = 1; y < N; y++) {
    for (let x = 1; x < BN; x++) {
      board[y][x] =
        board[y][x] === 1
          ? Math.min(board[y - 1][x - 1], board[y][x - 1], board[y - 1][x]) + 1
          : 0;
      if (ans < board[y][x]) ans = board[y][x];
    }
  }

  
  return ans ** 2;
}
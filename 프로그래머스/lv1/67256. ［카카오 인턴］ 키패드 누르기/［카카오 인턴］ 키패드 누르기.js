function solution(numbers, hand) {
  const coord = [[3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
  let L = [3, 0], R = [3, 2]

  const moveR = (dest) => {R = dest; return 'R'}
  const moveL = (dest) => {L = dest; return 'L'}

  const bfs = (v) => {
    const target = coord[v]
    if (v % 3 === 1) return moveL(target)
    else if (v % 3 === 0 && v !== 0) return moveR(target)

    const ld = Math.abs(L[0] - target[0]) + Math.abs(L[1] - target[1]), rd = Math.abs(R[0] - target[0]) + Math.abs(R[1] - target[1])
    if (ld === rd) return hand === 'right' ? moveR(target) : moveL(target)
    return ld > rd ? moveR(target) : moveL(target)
  }

  return numbers.map(v => bfs(v)).join('')
}
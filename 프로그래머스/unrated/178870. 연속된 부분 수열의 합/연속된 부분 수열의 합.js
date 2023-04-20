const queue = ( init ) => {
  let front = 0, rear = 0, sum = 0, k = init
  
  return {
    enqueue: (value) => {
      rear++
      sum += value
    },
  
    dequeue: (seq) => {
      sum -= seq[front]
      front += 1;
    },
  
    size: () => rear - front,
    isLower: () => k > sum,
    isUpper: () => k < sum,
    isSame: () => k === sum,
    answer: () => [front, rear - 1]
  }
}

function solution(sequence, k) {
  let answer = []
  let len = Infinity
  const q = queue(k)

  for (const key in sequence) {
    q.enqueue(sequence[key])
    
    while (q.isUpper()) {
      q.dequeue(sequence)
    }

    if (q.isSame()) {
      if (len > q.size()) { 
        len = q.size()
        answer = q.answer()
      }
    }
  }

  return answer
}

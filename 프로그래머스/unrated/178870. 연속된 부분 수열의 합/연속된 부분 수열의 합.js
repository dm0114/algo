class Queue {
  constructor(k) {
    this.front = 0;
    this.rear = 0;
    this.sum = 0;
    this.k = k;
  }

  enqueue(value) {
    this.rear++
    this.sum += value;
  }

  dequeue(seq) {
    this.sum -= seq[this.front]
    this.front += 1;
  }

  size() {
    return this.rear - this.front;
  }

  isLower() {
    return this.k > this.sum
  }

  isUpper() {
    return this.k < this.sum
  }

  isSame() {
    return this.k === this.sum
  }
}

function solution(sequence, k) {
  let answer = []
  let len = Infinity
  const q = new Queue(k)

  for (const key in sequence) {
    q.enqueue(sequence[key], +key)      
    
    while (q.isUpper()) {
      q.dequeue(sequence)
    }

    if (q.isSame()) {
      if (len > q.size()) { 
        len = q.size()
        answer = [q.front, q.rear - 1]
      }
    }
  }

  return answer
}
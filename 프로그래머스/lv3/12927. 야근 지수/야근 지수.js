class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(v) {
    this.heap.push(v);
    let i = this.heap.length - 1,
      pi = Math.floor(i / 2);

    while (pi !== 0 && this.heap[pi] < v) {
      [this.heap[pi], this.heap[i]] = [v, this.heap[pi]];

      (i = pi), (pi = Math.floor(i / 2));
    }
  }

  pop() {
    if (this.size() < 2) {
      return this.heap.pop()
    }
    
    const root = this.heap[1];
    this.heap[1] = this.heap.pop();

    let i = 1, l = 2, r = 3;

    while (this.heap[i] < this.heap[l] || this.heap[i] < this.heap[r]) {
      if (this.heap[l] < this.heap[r]) {
        [this.heap[i], this.heap[r]] = [this.heap[r], this.heap[i]];
        i = r;
      } else {
        [this.heap[i], this.heap[l]] = [this.heap[l], this.heap[i]];
        i = l;
      }
      l = i * 2;
      r = i * 2 + 1;
    }

    return root;
  }

  work() {
    if (this.heap[1] >= 2) {
      this.heap[1] -= 1;
      let i = 1, l = 2, r = 3;

      while (this.heap[i] < this.heap[l] || this.heap[i] < this.heap[r]) {
        if (this.heap[l] < this.heap[r]) {
          [this.heap[i], this.heap[r]] = [this.heap[r], this.heap[i]];
          i = r;
        } else {
          [this.heap[i], this.heap[l]] = [this.heap[l], this.heap[i]];
          i = l;
        }
        l = i * 2;
        r = i * 2 + 1;
      }
    } else {
      this.pop();
    }
  }

  getFatigue() {
    return this.heap.reduce((p, v) => p + v ** 2, 0)
  }

  size() {
    return this.heap.length - 1
  }
}

function solution(n, works) {
  const heap = new MaxHeap();
  works.forEach(v => heap.push(v))

  while (n !== 0 && heap.size() !== 0) {
    heap.work();
    n -= 1
  }

  return heap.getFatigue();
}
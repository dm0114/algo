function solution(N, road, K) {
  const delivery = Array(N+1).fill(500000);
  const q = [];
  const graph = Array.from({length:N+1}, () => []);

  road.forEach(([v1, v2, t]) => {
      graph[v1].push({ to: v2, time: t });
      graph[v2].push({ to: v1, time: t });
  });
  

  delivery[1] = 0;
  q.push({to: 1, time: 0});

  
  while (q.length) {
      let {to, _} = q.shift();
      
      graph[to].forEach(next => {
          if (delivery[next.to] > delivery[to] + next.time) {
              delivery[next.to] = delivery[to] + next.time;
              q.push(next);
          }
      })
      
  }
  
  return delivery.filter(x => x <= K).length;
}
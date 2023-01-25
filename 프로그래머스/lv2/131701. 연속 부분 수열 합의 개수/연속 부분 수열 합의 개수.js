function solution(elements) {
  const LEN = elements.length;
  const dict = {};

  elements.forEach((_, i) => {    
    
    dict[elements.reduce((p, _, j) => {
      dict[p] || (() => {dict[p] = true})();
      return p + elements[(i + j) % LEN];
      }, 0)] = true;
  });

  return Object.keys(dict).length - 1;
}
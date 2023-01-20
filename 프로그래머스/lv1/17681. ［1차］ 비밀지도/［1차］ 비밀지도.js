function solution(n, arr1, arr2) {
  return arr1.map((v, i) => ((+(v.toString(2)) + +(arr2[i].toString(2)))+'').padStart(n, '0')).map(v => 
      v.split('').map(v => v !== '0' ? '#' : ' ').join('')
    );
}
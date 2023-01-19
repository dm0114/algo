// 배열 초기화 - https://merrily-code.tistory.com/158﻿
function solution(n) {
  return Array.from(Array(n), (_, i) => i % 2 ? '박' : '수').join('')
}

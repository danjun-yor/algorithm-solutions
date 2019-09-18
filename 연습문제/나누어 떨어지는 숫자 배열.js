function solution(arr = [], divisor = -1) {
  arr = arr.filter(n => n % divisor === 0);
  return arr.length === 0 ? [-1] : arr.sort((a, b) => a - b);
}

// divisor로 나누어 떨어지는 값을 오름차순으로 정렬
// 나누어 떨어지는게 없으면 [-1] 리턴
let arr = [5, 9, 7, 10],
  divisor = 5;
console.log(solution(arr, divisor));
(arr = [2, 36, 1, 3]), (divisor = 1);
console.log(solution(arr, divisor));
(arr = [3, 2, 6]), (divisor = 10);
console.log(solution(arr, divisor));

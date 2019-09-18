function solution(a, b) {
  let answer = 0;
  const start = a > b ? b : a;
  const end = a > b ? a : b;

  for (let i = start; i <= end; i++) {
    answer += i;
  }

  return answer;
}

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴
let a = 3,
  b = 5;
console.log(solution(a, b));
(a = 3), (b = 3);
console.log(solution(a, b));
(a = 5), (b = 3);
console.log(solution(a, b));

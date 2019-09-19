function solution(n = 2) {
  // 에라토스테네스의 체
  const primeNumbers = new Array(n + 1).fill(true);
  primeNumbers[0] = false;
  primeNumbers[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeNumbers[j] = false;
      }
    }
  }

  return primeNumbers.filter(v => v).length;
}

function isPrime(n) {
  for (let j = 2; j <= Math.sqrt(n); j++) {
    if (n % j === 0) {
      return false;
    }
  }
  return true;
}

/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

2 <= n <= 1000000
*/

let n = 10;
console.log(solution(n));
n = 5;
console.log(solution(n));
n = 100;
console.log(solution(n));
n = 1000000;
console.log(solution(n));

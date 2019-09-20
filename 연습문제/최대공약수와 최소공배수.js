function solution(n = 1, m = 1) {
  const nGcd = gcd(n, m);
  return [nGcd, (n * m) / nGcd];
}

function getDivisors(n) {
  const divisors = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }
  return divisors;
}

function gcd(n, m) {
  const nDivisors = [...getDivisors(n)];
  const mDivisors = [...getDivisors(m)];

  return Math.max(...nDivisors.filter(v => mDivisors.indexOf(v) >= 0));
}

function lcm(n, m) {
  let nMul = n,
    mMul = m;
  while (nMul !== mMul) {
    if (nMul < mMul) {
      nMul += n;
    } else {
      mMul += m;
    }
  }
  return nMul;
}

/*
문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.
*/

let n = 3,
  m = 12;
console.log(solution(n, m));
(n = 2), (m = 5);
console.log(solution(n, m));

// 용량이 정해진 배낭에 주어진 물건들 중 가장 값어치가 있게 담는 문제
// 재귀로 풀기
(() => {
  const weights = [null, 1, 2, 3, 4, 5];
  const values = [null, 5, 3, 5, 3, 2];

  function ks(n: number, capacity: number) {
    if (n === 0 || capacity === 0) {
      // 기저사례
      // 다 살펴봤거나, 남은 용량이 없으면 리턴
      return 0;
    } else if (weights[n] > capacity) {
      // 현재 무게가 용량을 초과하면
      return ks(n - 1, capacity); // 다음 리스트를 살펴본다
    } else {
      // 넣을 수 있으면
      const tmp1 = ks(n - 1, capacity); // 다음 리스트를 살펴보거나
      const tmp2 = values[n] + ks(n - 1, capacity - weights[n]); // 현재 무게를 넣어본다.

      return Math.max(tmp1, tmp2); // 더 값어치가 있는 것을 리턴한다.
    }
  }
})();
// DP로 풀기

(() => {
  const weights = [null, 1, 2, 3, 4, 5];
  const values = [null, 5, 3, 5, 3, 2];

  const n = 5;
  const capacity = 10;
  const cache = new Array(n + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0));
  console.log(cache);

  console.log(ks(n, capacity));

  function ks(n: number, capacity: number) {
    if (cache[n][capacity]) {
      // 계산결과가 이미 존재하면 리턴
      return cache[n][capacity];
    }
    let result = null;
    if (n === 0 || capacity === 0) {
      // 기저사례
      // 다 살펴봤거나, 남은 용량이 없으면 리턴
      result = 0;
    } else if (weights[n] > capacity) {
      // 현재 무게가 용량을 초과하면
      result = ks(n - 1, capacity); // 다음 리스트를 살펴본다
    } else {
      // 넣을 수 있으면
      const tmp1 = ks(n - 1, capacity); // 다음 리스트를 살펴보거나
      const tmp2 = values[n] + ks(n - 1, capacity - weights[n]); // 현재 무게를 넣어본다.

      result = Math.max(tmp1, tmp2); // 더 값어치가 있는 것을 리턴한다.
    }
    cache[n][capacity] = result; // 캐시에 저장
    return result;
  }
})();

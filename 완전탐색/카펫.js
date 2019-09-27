function solution(brown = 0, red = 0) {
  // 가로: h, 세로: v
  const sum = brown + red;
  let limit = parseInt(Math.sqrt(sum));
  for (let y = 3; y <= limit; y++) {
    if (sum % y === 0) {
      let x = sum / y;
      if ((x - 2) * (y - 2) === red) {
        return [x, y];
      }
    }
  }
}

let brown = 10,
  red = 2;
console.log(solution(brown, red));
(brown = 8), (red = 1);
console.log(solution(brown, red));
(brown = 24), (red = 24);
console.log(solution(brown, red));
(brown = 5000), (red = 2000000);
console.log(solution(brown, red));

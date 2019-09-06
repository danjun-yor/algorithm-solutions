(() => {
  function solution(triangle) {
    const cache = new Array(triangle.length)
      .fill(null)
      .map((v, i) => new Array(i + 1).fill(null));
    console.log(cache);
    dp(0, 0, 0);
    function dp(x, y, sum) {
      if (x >= triangle.length) {
        return;
      }
      console.log(x, y, sum);
      if (x === 0 && y === 0) {
        cache[x][y] = triangle[x][y];
        sum = cache[x][y];
      } else {
        if (cache[x][y]) {
          cache[x][y] = Math.max(sum + triangle[x][y], cache[x][y]);
        } else {
          cache[x][y] = sum + triangle[x][y];
        }
        sum = cache[x][y];
      }
      dp(x + 1, y, sum);
      dp(x + 1, y + 1, sum);
    }
    console.log(cache);
    return Math.max(...cache[triangle.length - 1]);
  }
  let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
  console.log(solution(triangle));
})();

(() => {
  function solution(triangle) {
    const cache = new Array(triangle.length)
      .fill(0)
      .map((v, i) => new Array(i + 1).fill(0));
    cache[0][0] = triangle[0][0];
    cache[1][0] = cache[0][0] + triangle[1][0];
    cache[1][1] = cache[0][0] + triangle[1][1];

    for (var i = 2; i < triangle.length; i++) {
      for (var j = 0; j <= i; j++) {
        if (j === 0) {
          cache[i][j] = cache[i - 1][j] + triangle[i][j];
        } else if (j === i) {
          cache[i][j] = cache[i - 1][j - 1] + triangle[i][j];
        } else {
          cache[i][j] =
            Math.max(cache[i - 1][j - 1], cache[i - 1][j]) + triangle[i][j];
        }
      }
    }
    return Math.max(...cache[triangle.length - 1]);
  }
  let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
  console.log(solution(triangle));
})();

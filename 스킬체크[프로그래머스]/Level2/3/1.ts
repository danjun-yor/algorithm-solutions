/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 
서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

(function() {
  function solution(nums: Array<number>) {
    nums.sort((a, b) => a - b);
    const candidates = [];
    for (var i = 0; i < nums.length - 2; i++) {
      for (var j = i + 1; j < nums.length - 1; j++) {
        for (var k = j + 1; k < nums.length; k++) {
          candidates.push(nums[i] + nums[j] + nums[k]);
        }
      }
    }

    return candidates.filter(c => {
      for (let i = 2; i < c / 2; i++) {
        if (c % i === 0) {
          return false;
        }
      }
      return true;
    }).length;
  }

  let nums = [1, 2, 3, 4];
  // 1 2 3
  // 1 3 4
  // 2 3 4
  console.log(solution(nums));

  nums = [1, 2, 7, 6, 4];

  // 1 2 4 = 7     1 2 3
  // 1 2 6 = 9     1 2 4
  // 1 2 7 = 10    1 2 5
  // 1 4 6
  // 1 4 7
  // 2 4 6
  // 2 4 7
  // 4 6 7
  console.log(solution(nums));
})();

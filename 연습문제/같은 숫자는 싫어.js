function solution(arr = []) {
  let num = -1;
  return arr.reduce((prev, cur) => {
    if (num !== cur) {
      num = cur;
      prev.push(num);
      return prev;
    } else {
      return prev;
    }
  }, []);
}

// 배열 arr 각 원소는 0 ~ 9 숫자로 이루어짐
// arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
// 기존 순서는 유지해야함
// 예시1: arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// 예시2: arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

// arr.length <= 1000000
let arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution(arr));
arr = [4, 4, 4, 3, 3];
console.log(solution(arr));

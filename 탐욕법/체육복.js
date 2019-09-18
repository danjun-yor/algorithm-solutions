function solution(n = 0, lost = [], reserve = []) {
  var answer = 0;

  lost.sort();
  reserve.sort();

  lost = lost.filter(l => {
    let duplicateIdx = reserve.indexOf(l);
    if (duplicateIdx >= 0) {
      reserve.splice(duplicateIdx, 1);
      return false;
    }
    return true;
  });

  lost = lost.filter(l => {
    let forwardIdx = reserve.indexOf(l - 1);
    if (forwardIdx >= 0) {
      reserve.splice(forwardIdx, 1);
      return false;
    }
    let backIdx = reserve.indexOf(l + 1);
    if (backIdx >= 0) {
      reserve.splice(backIdx, 1);
      return false;
    }
    return true;
  });

  return n - lost.length;
}

// 전체 학생의 수 n
// 체육복 도난당한 학생 번호 배열 lost
// 여벌 체육복 가져온 학생 번호 배열 reserve

// 2 <= n <= 30
// 1 <= lost.length <= n, 중복번호X
// 1 <= reserve.length <= n, 중복번호X

// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있음.
// 번호는 체격순, 바로 앞번호 또는 바로 뒷번호 학생에게만 체육복을 빌려줄 수 있음.
/* 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
  이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
  => lost에도 있고, reserve에도 있는 학생은 체육복을 빌려줄 수 없다! */
// 체육복을 입어 체육수업을 들을 수 있는 학생의 최댓값
let n = 5,
  lost = [2, 4],
  reserve = [1, 3, 5];
console.log(solution(n, lost, reserve));
(n = 5), (lost = [2, 4]), (reserve = [3]);
console.log(solution(n, lost, reserve));
(n = 3), (lost = [3]), (reserve = [1]);
console.log(solution(n, lost, reserve));
(n = 10), (lost = [1, 2, 10]), (reserve = [1, 8]);
console.log(solution(n, lost, reserve));
(n = 3), (lost = [1, 2, 3]), (reserve = [1, 2, 3]);
console.log(solution(n, lost, reserve));
(n = 3), (lost = [1]), (reserve = [2]);
console.log(solution(n, lost, reserve));
(n = 4), (lost = [1, 3, 4]), (reserve = [2, 3]);
console.log(solution(n, lost, reserve));
(n = 7), (lost = [2, 3, 4]), (reserve = [1, 2, 3, 6]);
console.log(solution(n, lost, reserve));
(n = 8), (lost = [4, 5, 7]), (reserve = [2, 3, 5]);
console.log(solution(n, lost, reserve));

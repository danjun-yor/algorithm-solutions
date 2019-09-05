export function solution(citations: Array<number>) {
  citations.sort((a, b) => b - a);
  let answer = 0;

  for (var i = citations[0]; i >= 0; i--) {
    // i번 이상 인용된 길이 h를 구한다.
    let hIndexCandidate = citations.filter(citation => citation >= i).length;

    // h가 i 이상이면 답이다.
    if (hIndexCandidate >= i && answer === 0) {
      answer = i;
      break;
    }
  }
  return answer;
}
let citations = [3, 0, 6, 1, 5];
console.log(solution(citations));
citations = [3, 3];
console.log(solution(citations));
citations = [2, 1];
console.log(solution(citations));
citations = [1, 1, 1];
console.log(solution(citations));
citations = [3, 3, 3];
console.log(solution(citations));
citations = [10, 100];
console.log(solution(citations));
citations = [10, 8, 5, 4, 3];
console.log(solution(citations));
citations = [25, 10, 7, 8, 5, 3, 3, 1];
console.log(solution(citations));

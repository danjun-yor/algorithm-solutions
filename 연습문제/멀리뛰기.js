function solution(n = 0) {
  var answer = 0;

  // 멀리뛰기에 사용될 칸 수: n
  // 끝에 도달하는 방법 갯수

  // n = 1: 1
  // n = 2: 2
  // n = 3: 111 12 21(3)
  // n = 4: 1111 112 121 112 211 22(5)
  // n = 5: 11111 2111 1211 1121 1112 122 212 221 (8)

  // 피보나치
  var arr = [];
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n];
}

let n = 4;
console.log(solution(n));

/*
문제 설명
효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는
(1칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 1칸)
(1칸, 1칸, 2칸)
(2칸, 1칸, 1칸)
(2칸, 2칸)
의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다.
멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내,
여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 예를 들어 4가 입력된다면, 5를 return하면 됩니다.

제한 사항
n은 1 이상, 2000 이하인 정수입니다.
입출력 예
n	result
4	5
3	3
입출력 예 설명
입출력 예 #1
위에서 설명한 내용과 같습니다.

입출력 예 #2
(2칸, 1칸)
(1칸, 2칸)
(1칸, 1칸, 1칸)
총 3가지 방법으로 멀리 뛸 수 있습니다.
*/

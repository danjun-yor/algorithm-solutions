function solution(s) {
  let answer = 0;
  let length = s.length;

  for (let i = 0; i < length; i++) {
    for (let subLength = length; subLength > answer; subLength--) {
      let left = i;
      let right = left + subLength - 1;
      while (left < right && s[left] === s[right]) {
        left++;
        right--;
      }
      if (left >= right && answer < subLength) {
        answer = subLength;
        break;
      }
    }
  }

  return answer;
}

// 효율성 통과 못함
function myWorngSolution(s = "") {
  const cache = {};

  for (let i = s.length; i >= 1; i--) {
    for (let j = s.length - i; j >= 0; j--) {
      const str = s.substr(j, i);
      if (!cache[str]) {
        if (isPalindrome(str)) {
          return i;
        } else {
          cache[str] = 1; // 체크함
        }
      }
    }
  }
}

function isPalindrome(s = "") {
  return (
    s
      .split("")
      .reverse()
      .join("") === s
  );
}

let s = "abccba";
console.log(solution(s));
s = "abacde";
console.log(solution(s));

/*
문제 설명
앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

예를들면, 문자열 s가 abcdcba이면 7을 return하고 abacde이면 3을 return합니다.

제한사항
문자열 s의 길이 : 2,500 이하의 자연수
문자열 s는 알파벳 소문자로만 구성
*/

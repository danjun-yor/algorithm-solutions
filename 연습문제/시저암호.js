const charCodes = {
  a: "a".charCodeAt(0),
  z: "z".charCodeAt(0),
  A: "A".charCodeAt(0),
  Z: "Z".charCodeAt(0)
};

function solution(s = "", n = 1) {
  if (n > 25 || n < 1) {
    return null;
  }
  return s
    .split("")
    .map(c => {
      if (c !== " ") {
        const charCode = c.charCodeAt(0) + n;
        // charCode of z = 122, charCode of a = 97
        // charCode of Z = 90, charCode of A = 65

        if (c.charCodeAt(0) <= charCodes["Z"]) {
          c = String.fromCharCode(
            charCode > charCodes["Z"]
              ? charCode - (charCodes["Z"] - charCodes["A"]) - 1
              : charCode
          );
        } else {
          c = String.fromCharCode(
            charCode > charCodes["z"]
              ? charCode - (charCodes["z"] - charCodes["a"]) - 1
              : charCode
          );
        }
      }
      return c;
    })
    .join("");
}

/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다.
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
*/

let s = "AB",
  n = 1;
console.log(solution(s, n));
(s = "z"), (n = 1);
console.log(solution(s, n));
(s = "a B z"), (n = 4);
console.log(solution(s, n));
(s = "a B Z"), (n = 4);
console.log(solution(s, n));

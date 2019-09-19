function solution(strings = [], n = 0) {
  return strings.sort((a, b) => {
    const aCode = a.charCodeAt(n);
    const bCode = b.charCodeAt(n);
    if (aCode === bCode) {
      return String(a).localeCompare(b);
    }
    return aCode - bCode;
  });
}

// n번째 글자를 기준으로 오름차순 정렬
let strings = ["sun", "bed", "car"];
let n = 1;
console.log(solution(strings, n));

strings = ["abce", "abcd", "cdx"];
n = 2;
console.log(solution(strings, n));

strings = ["abqab", "abce", "abcd", "cdx", "abqaa"];
n = 2;
console.log(solution(strings, n));

strings = [
  "cdzbe",
  "cdzae",
  "abzcd",
  "cdzab",
  "abzfg",
  "abzaa",
  "abzbb",
  "ababb",
  "bbzaa"
];
n = 2;
console.log(solution(strings, n));

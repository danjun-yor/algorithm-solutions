// Baekjoon
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on("line", function(line) {
  lines.push(line);
}).on("close", function() {
  const input = lines.shift();
  const crypto = require("crypto");
  console.log(
    crypto
      .createHash("sha256")
      .update(input)
      .digest("hex")
  );
  process.exit(0);
});

/*문제
문자열 S가 주어졌을 때, SHA-256 해시값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 문자열 S가 주어진다. S는 알파벳 대문자와 소문자, 그리고 숫자로만 이루어져 있으며, 길이는 최대 50이다.

출력
첫째 줄에 S의 SHA-256 해시값을 출력한다.
 */

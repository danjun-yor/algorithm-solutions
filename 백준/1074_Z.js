const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];
let n,
  r,
  c,
  cnt = 0;

rl.on("line", function(line) {
  lines.push(line);
}).on("close", function() {
  [n, r, c] = lines[0].split(" ").map(v => parseInt(v));

  f(Math.pow(2, n), 0, 0);

  process.exit(0);
});

function f(n, x, y) {
  if (n === 2) {
    if (x === r && y === c) {
      console.log(cnt);
      return;
    }
    cnt++;
    if (x === r && y + 1 === c) {
      console.log(cnt);
      return;
    }
    cnt++;
    if (x + 1 === r && y === c) {
      console.log(cnt);
      return;
    }
    cnt++;
    if (x + 1 === r && y + 1 === c) {
      console.log(cnt);
      return;
    }
    cnt++;
    return;
  }
  f(n / 2, x, y);
  f(n / 2, x, y + n / 2);
  f(n / 2, x + n / 2, y);
  f(n / 2, x + n / 2, y + n / 2);
}

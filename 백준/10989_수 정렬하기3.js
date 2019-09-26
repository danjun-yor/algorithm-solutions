const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on("line", function(line) {
  lines.push(line);
}).on("close", function() {
  const n = parseInt(lines[0]);

  const counts = new Array(10001).fill(0);

  for (let i = 1; i <= n; i++) {
    const num = parseInt(lines[i]);
    counts[num] += 1; // 등장횟수를 센다.
  }

  for (let i = 1; i <= counts.length; i++) {
    while (counts[i] > 0) {
      console.log(i);
      counts[i] -= 1;
    }
  }
  process.exit(0);
});

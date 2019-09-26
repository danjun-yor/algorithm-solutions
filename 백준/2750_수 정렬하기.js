const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on("line", function(line) {
  lines.push(line);
}).on("close", function() {
  const n = Number(lines[0]);

  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(Number(lines[i]));
  }
  numbers.sort((a, b) => a - b);
  console.log(numbers.join("\n"));

  process.exit(0);
});

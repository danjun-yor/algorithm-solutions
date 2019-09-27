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
  const numbers = lines[1].split(" ").map(v => parseInt(v));

  const result = [numbers[0]];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += result[j];
    }
    result.push(numbers[i] * (i + 1) - sum);
  }
  console.log(result.join(" "));

  process.exit(0);
});

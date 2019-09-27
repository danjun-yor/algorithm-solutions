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
  const scores = lines[1].split(" ").map(v => Number(v));

  console.log(Math.max(...scores) - Math.min(...scores));

  process.exit(0);
});

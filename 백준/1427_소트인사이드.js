const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on("line", function(line) {
  lines.push(line);
}).on("close", function() {
  console.log(
    lines[0]
      .split("")
      .map(v => Number(v))
      .sort((a, b) => b - a)
      .join("")
  );

  process.exit(0);
});

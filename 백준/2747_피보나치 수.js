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

  const f = [];
  f[0] = 0;
  f[1] = 1;
  f[2] = 1;

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  console.log(f[n]);

  process.exit(0);
});

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
  const xys = [];

  for (let i = 1; i <= n; i++) {
    xys.push(lines[i].split(" ").map(v => Number(v)));
  }

  xys.sort((a, b) => {
    const [xa, ya] = a;
    const [xb, yb] = b;

    const cmpX = xa - xb;
    if (cmpX !== 0) {
      return cmpX;
    }
    return ya - yb;
  });

  console.log(xys.map(x => `${x[0]} ${x[1]}`).join("\n"));

  process.exit(0);
});

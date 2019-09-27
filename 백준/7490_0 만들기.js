const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];
let operators = [];

rl.on("line", function(line) {
  lines.push(line);
}).on("close", function() {
  const T = Number(lines[0]);

  for (let i = 1; i <= T; i++) {
    const n = Number(lines[i]);

    operators = [];

    f([], n - 1);

    for (let op of operators) {
      const str = op.reduce(
        (prev, cur, currentIndex) => prev + cur + (currentIndex + 2),
        "1"
      );
      if (eval(str.replace(/\s/g, "")) === 0) {
        console.log(str);
      }
    }
    console.log("");
  }

  process.exit(0);
});

function f(arr, trial) {
  if (trial === 0) {
    operators.push(arr);
    return;
  }
  f([...arr, " "], trial - 1);
  f([...arr, "+"], trial - 1);
  f([...arr, "-"], trial - 1);
}

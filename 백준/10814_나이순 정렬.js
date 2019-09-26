Array.prototype.stableSort = function(cmp) {
  cmp = !!cmp
    ? cmp
    : (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
  let stabilizedThis = this.map((el, index) => [el, index]);
  let stableCmp = (a, b) => {
    let order = cmp(a[0], b[0]);
    if (order != 0) return order;
    return a[1] - b[1];
  };
  stabilizedThis.sort(stableCmp);
  for (let i = 0; i < this.length; i++) {
    this[i] = stabilizedThis[i][0];
  }
  return this;
};

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
  const members = [];

  for (let i = 1; i <= n; i++) {
    const [age, name] = lines[i].split(" ");
    members.push([Number(age), name]);
  }
  members.stableSort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      return 0;
    }
  });
  members.forEach(v => console.log(v[0] + " " + v[1]));

  process.exit(0);
});

/*
1
1 Junkyu


3
21 Junkyu
21 Dohyun
20 Sunyoung


8
10 Sunyoung
1 Junkyu
21 Dohyun
20 Sunyoung
2 Junkyudd
21 Dohyunee
33 Dohyun
21 Dohyunqwe
*/

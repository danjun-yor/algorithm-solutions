export function solution(array: Array<number>, commands: Array<Array<number>>) {
  const answer = [];

  commands.forEach(command => {
    let value = null;

    let i = command[0] > array.length ? array.length : command[0];
    let j = command[1] > array.length ? array.length : command[1];
    let k = command[2] > array.length ? array.length : command[2];

    console.log(array.slice(i - 1, j));
    console.log(array.slice(i - 1, j).sort());
    console.log(array.slice(i - 1, j).sort()[k - 1]);
    answer.push(array.slice(i - 1, j).sort()[k - 1]);
  });

  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands));

array = [1];
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands));

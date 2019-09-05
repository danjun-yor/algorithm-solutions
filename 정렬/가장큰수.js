export function solution(numbers) {
    numbers.sort((a, b) => {
        return (Number(b.toString() + a.toString()) - Number(a.toString() + b.toString()));
    });
    const answer = numbers.reduce((prev, cur) => {
        return prev.concat(cur.toString());
    }, "");
    return parseInt(answer) > 0 ? answer : "0";
}
let numbers = [6, 10, 2];
console.log(solution(numbers));
numbers = [3, 30, 34, 5, 9];
console.log(solution(numbers));

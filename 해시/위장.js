function solution(clothes = [[]]) {
  const map = new Map();
  for (let c of clothes) {
    let [cloth, type] = c;
    map.has(type)
      ? map.set(type, [...map.get(type), cloth])
      : map.set(type, [cloth]);
  }

  const values = map.values();
  let itr = values.next();
  let answer = 1;
  while (!itr.done) {
    answer *= itr.value.length + 1; // 선택하지 않는 경우의 수를 더함
    itr = values.next();
  }

  return answer - 1; // 모두 선택하지 않는 경우의 수 빼줌
}

let clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"]
];
console.log(solution(clothes));
clothes = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"]
];
console.log(solution(clothes));
clothes = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["1", "headgear"],
  ["2", "headgear"],
  ["3", "eyewear"],
  ["4", "eyewear"]
];
console.log(solution(clothes));

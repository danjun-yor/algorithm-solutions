function solution(clothes = []) {
  const map = new Map();

  for (let cloth of clothes) {
    const [name, type] = cloth;
    if (map.has(type)) {
      map.get(type).push(name);
    } else {
      map.set(type, [name]);
    }
  }

  return (
    [...map.values()].reduce((prev, cur) => prev * (cur.length + 1), 1) - 1
  );
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

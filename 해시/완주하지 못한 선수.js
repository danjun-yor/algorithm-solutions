function setMap(array, map) {
  array.forEach(c => {
    map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
  });
}

function solution(participant = [], completion = []) {
  const participantMap = new Map();
  const completionMap = new Map();

  setMap(participant, participantMap);
  setMap(completion, completionMap);

  const keys = participantMap.keys();
  let itr = "";
  do {
    itr = keys.next();
    if (participantMap.get(itr.value) !== completionMap.get(itr.value)) {
      return itr.value;
    }
  } while (!itr.done);
}

let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];
console.log(solution(participant, completion));
participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
completion = ["josipa", "filipa", "marina", "nikola"];
console.log(solution(participant, completion));
participant = ["mislav", "stanko", "mislav", "ana"];
completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion));

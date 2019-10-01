function solution(participant = [], completion = []) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
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

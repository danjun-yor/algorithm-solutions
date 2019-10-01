function solution(genres = [], plays = []) {
  // 속한 노래가 가장 많이 재생된 장르를 먼저 수록
  const map = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (!map.has(genres[i])) {
      map.set(genres[i], {
        list: [[plays[i], i]],
        total: plays[i]
      });
    } else {
      const genre = map.get(genres[i]);
      genre["list"].push([plays[i], i]);
      genre["total"] += plays[i];
    }
  }
  const sortedGenres = [...map.values()].sort((a, b) => b.total - a.total);
  const sortedPlayes = sortedGenres.map(v =>
    v.list.sort((a, b) => {
      const order = b[0] - a[0];
      if (order === 0) {
        return a[1] - b[1];
      }
      return order;
    })
  );
  const answer = [];
  for (let play of sortedPlayes) {
    answer.push(...play.slice(0, 2).map(v => v[1]));
  }

  return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"],
  plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));

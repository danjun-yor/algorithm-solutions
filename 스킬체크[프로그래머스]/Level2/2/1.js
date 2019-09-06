/*
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다.
표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)
*/
function solution(board) {
    var answer = 1234;
    const copyBoard = board.slice();
    const map = copyBoard.map(row => row.fill(0));
    console.log(board);
    for (var i = 0; i < board.length - 1; i++) {
        for (var j = 0; j < board[i].length - 1; j++) {
            if (board[i][j] === 0) {
                map[i][j] = 0;
                continue;
            }
            if (board[i + 1][j + 1] === 1 &&
                board[i + 1][j] === 1 &&
                board[i][j + 1] === 1) {
                map[i][j] = 1;
            }
        }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(map);
    return answer;
}
let board = [[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]];
console.log(solution(board));
board = [[0, 0, 1, 1], [1, 1, 1, 1]];
console.log(solution(board));

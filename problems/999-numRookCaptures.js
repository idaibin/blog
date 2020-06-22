/**
 * *999. 车的可用捕获量
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) /* ?. */ {
    function getR() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board[i][j] === 'R') {
                    return [i, j];
                }
            }
        }
    }

    // 捕获量
    let captureAmount = 0;
    // 车的坐标
    const [x, y] = getR();
    // 车在X轴上移动的方位
    const dx = [0, 0, 1, -1];
    // 车在Y轴上移动的方位
    const dy = [1, -1, 0, 0];

    // 外层循环，依次走4个方向
    for (let i = 0; i < 4; i++) {
        // 内层循环，向同一个方向一直走下去
        for (let j = 1; ; j++) {
            // 车在X轴移动后的坐标
            const moveX = x + j * dx[i];
            // 车在y轴移动后的坐标
            const moveY = y + j * dy[i];
            // 车不能走出棋盘范围 且 不可以碰到象
            if (
                moveX < 0 ||
                moveX >= 8 ||
                moveY < 0 ||
                moveY >= 8 ||
                board[moveX][moveY] === 'B'
            ) {
                break;
            }
            // 捕获到卒
            if (board[moveX][moveY] === 'p') {
                captureAmount++;
                // 捕获到小卒后，停止前进了
                break;
            }
        }
    }
    return captureAmount;
};
numRookCaptures([
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'R', '.', '.', '.', 'p'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
]);
numRookCaptures([
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
]);
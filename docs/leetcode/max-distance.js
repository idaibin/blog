/**
 * * 1162. 地图分析
 * https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/jian-dan-java-miao-dong-tu-de-bfs-by-sweetiee/
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let len = 0;
    let max = 0;
    let dif = grid[0][0];
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            const type = grid[x][y];
            if (type === dif) {
                len += 1;
            } else {
                dif = type;
                max = Math.max(max, len);
                len = 0;
            }
        }
    }
    max += len;
    max;
};

maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
]);

maxDistance([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]);

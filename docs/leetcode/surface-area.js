/**
    ### 解题思路
    假设在坐标系中，x横轴,y竖轴,z垂直方向;

    往其中放入立方体，是从[0,0]开始的，那么第一个立方体，接触其它立方体的情况只能是延x轴和y轴方向，以及垂直方向(立方体数量）。

    垂直方向的面积可以根据当前格的数量直接计算,立方体数量*6，减重叠的面积（数量-1 * 2），`number * 6 - (number - 1) * 2`。

    其次，重叠的情况一定是有两个立方体，那么我们只需计算当前区域内和x、y轴重叠部分*2即可，然后减去这部分。
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let area = 0;
    for (let x = 0; x < grid.length; x++) {
        const item = grid[x];
        for (let y = 0; y < item.length; y++) {
            const number = grid[x][y];
            if (number <= 0) continue;
            area += number * 6 - (number - 1) * 2;
            const xDirection = grid[x + 1] && grid[x + 1][y];
            const yDirection = grid[x][y + 1];
            if (xDirection) {
                area -= 2 * Math.min(number, xDirection);
            }
            if (yDirection) {
                area -= 2 * Math.min(number, yDirection);
            }
        }
    }
    return area;
};

const test1 = [[2]];
const test2 = [
    [1, 2],
    [3, 4]
];
const test3 = [
    [1, 0],
    [0, 2]
];
const test4 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
const test5 = [
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2]
];
console.log(surfaceArea(test1));
console.log(surfaceArea(test2));
console.log(surfaceArea(test3));
console.log(surfaceArea(test4));
console.log(surfaceArea(test5));

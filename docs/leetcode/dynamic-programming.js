/**
 * * 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。
 * @param {number[]} numbers
 * @return {number}
 */
var massage = function(numbers) {
    const len = numbers.length;
    if (len <= 1) {
        return len === 1 ? numbers[0] : 0;
    }
    const dp = new Array(len).fill().map(() => [0, 0]);
    dp[0][1] = numbers[0];
    for (let index = 1; index < len; index++) {
        dp[index][0] = Math.max(dp[index - 1][0], dp[index - 1][1]);
        dp[index][1] = dp[index - 1][0] + numbers[index];
    }
    return Math.max(dp[len - 1][0], dp[len - 1][1]);
};
const array = [1, 3, 5, 2, 3];
console.log(massage(array));

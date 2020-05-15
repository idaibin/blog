/**
 * * 面试题62. 圆圈中最后剩下的数字
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    // function f(n, m) {
    //     if (n === 1) {
    //         return 0;
    //     }
    //     const x = f(n - 1, m);
    //     return (m + x) % n;
    // }
    // return f(n, m);
    let f = 0;
    for (let i = 2; i !== n + 1; ++i) f = (m + f) % i;
    return f;
};
console.log(lastRemaining(5, 3));
// console.log(lastRemaining(10, 17));

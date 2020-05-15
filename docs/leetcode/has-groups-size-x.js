/**
 * *914. 卡牌分组
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    // method - 1
    // const temp = {};
    // let max = 0;
    // deck.forEach(num => {
    //     if (!temp[num]) temp[num] = 0;
    //     temp[num] += 1;
    //     max = Math.max(max, temp[num]);
    // });
    // const arr = Object.values(temp);
    // let x = 2;
    // while (x <= max) {
    //     if (arr.every(item => item % x == 0)) return true;
    //     x++;
    // }
    // return false;

    // method - 2
    const temp = {};
    deck.forEach(num => {
        if (!temp[num]) temp[num] = 0;
        temp[num] += 1;
    });
    const arr = Object.values(temp);
    let res = arr[0];
    let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return arr.every(i => (res = gcd(res, i)) > 1);
};
// hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]);
// hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]);
hasGroupsSizeX([1]);
hasGroupsSizeX([1, 1, 2, 2, 2, 2]);
hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2]);

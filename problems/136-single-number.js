/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (nums.lastIndexOf(item) === i && nums.indexOf(item) === i) {
            return item;
        }
    }
    return -1;
};
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));

var singleNumber2 = function(nums) {
    let single = 0;
    for (let i = 0; i < nums.length; i++) {
        single ^= nums[i];
    }
    return single;
};
console.log(singleNumber2([2, 2, 1]));
console.log(singleNumber2([4, 1, 2, 1, 2]));

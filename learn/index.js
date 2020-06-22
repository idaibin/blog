/**
 * 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // nums = nums.filter((item, index) => item !== nums[index + 1]);

    // for (let index = 1; index < nums.length; index++) {
    //     const item = nums[index];
    //     if (item === nums[index - 1]) {
    //         nums.splice(index, 1);
    //         --index;
    //     }
    // }

    var count = 0;
    var n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[i - count] = nums[i];
        } else {
            count++;
        }
    }
    nums.splice(n - count, count);
    nums;
    return nums.length;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// removeDuplicates([1, 2, 2]);
// removeDuplicates([1, 1, 2]);
// removeDuplicates([1, 1, 1]);

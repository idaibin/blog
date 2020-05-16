/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
};

console.log(subarraySum([1, 2, 3, 4, 1, -1, 2, 3, 4], 10));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum2 = function(nums, k) {
    const hashMap = { 0: 1 };
    let prevSum = 0,
        count = 0;
    for (let i = 0; i < nums.length; i++) {
        prevSum += nums[i];
        if (hashMap[prevSum - k]) {
            count += hashMap[prevSum - k];
        }
        if (hashMap[prevSum]) {
            hashMap[prevSum] += 1;
        } else {
            hashMap[prevSum] = 1;
        }
    }
    return count;
};

console.log(subarraySum2([1, 2, 3, 4, 1, -1, 2, 3, 4], 10));
console.log(subarraySum2([1, 1, 1], 2));

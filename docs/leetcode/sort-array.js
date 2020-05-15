/**
 * * 912. 排序数组
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length === 1) return nums;
    const mid = (nums.length / 2) | 0;
    let leftAry = nums.slice(0, mid);
    let rightAry = nums.slice(mid);
    leftAry = sortArray(leftAry);
    rightAry = sortArray(rightAry);
    return merged(leftAry, rightAry);
};
function merged(a, b) {
    const ary = [];
    let ai = 0;
    let bi = 0;
    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) {
            ary.push(a[ai]);
            ++ai;
        } else {
            ary.push(b[bi]);
            ++bi;
        }
    }
    if (ai < a.length) {
        ary.push(...a.slice(ai));
    } else {
        ary.push(...b.slice(bi));
    }
    return ary;
}

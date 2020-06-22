/**
 * * 42. 接雨水
 * @param {number[]} height
 * @return {number}
 */
// 按列求
var trap = function (height) {
    let sum = 0;
    for (let i = 1; i < height.length - 1; i++) {
        let maxLeft = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (height[j] > maxLeft) {
                maxLeft = height[j];
            }
        }
        let maxRight = 0;
        for (let j = i + 1; j < height.length; j++) {
            if (height[j] > maxRight) {
                maxRight = height[j];
            }
        }
        const min = Math.min(maxLeft, maxRight);
        if (min > height[i]) {
            sum += min - height[i];
        }
    }
    return sum;
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

// 方法二 动态规划
var trap2 = function (height) {
    const len = height.length;
    let sum = 0;
    let maxLeft = new Array(len).fill().map(() => 0);
    let maxRight = new Array(len).fill().map(() => 0);
    for (let i = 1; i < len - 1; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
    }
    for (let i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
    }
    for (let i = 1; i < len - 1; i++) {
        const min = Math.min(maxLeft[i], maxRight[i]);
        min;
        if (min > height[i]) {
            sum += min - height[i];
        }
    }
    return sum;
};
trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

// 方法三 双指针
var trap3 = function (height) {
    const len = height.length;
    let sum = 0;
    let maxLeft = 0;
    let maxRight = new Array(len).fill().map(() => 0);
    for (let i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
    }
    for (let i = 1; i < len - 1; i++) {
        maxLeft = Math.max(maxLeft, height[i - 1]);
        const min = Math.min(maxLeft, maxRight[i]);
        min;
        if (min > height[i]) {
            sum += min - height[i];
        }
    }
    return sum;
};
trap3([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

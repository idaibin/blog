var singleNumber3 = function(nums) {
    let single = 0;
    for (let i = 0; i < nums.length; i++) {
        single ^= nums[i];
    }
    new Set(nums).forEach((item) => {
        single ^= item;
    });
    return single;
};
console.log(singleNumber3([1, 2, 3, 4, 5, 5, 6, 7, 8, 10]));

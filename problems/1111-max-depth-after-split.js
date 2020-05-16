/**
 * * 1111. 有效括号的嵌套深度
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let depth = 0;
    return [...seq].map(item => {
        if (item === '(') {
            return depth++ % 2;
        }
        if (item === ')') {
            return --depth % 2;
        }
    });
    // return seq.split("").map((value, index) => index & 1 ^ (value === '('));
};

maxDepthAfterSplit('(()())');
maxDepthAfterSplit('()(())()');

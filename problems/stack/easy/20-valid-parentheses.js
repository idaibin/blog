/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s.length) return true;
    if (s.length % 2 !== 0) return false;
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        if (brackets[item]) {
            stack.push(item);
        } else {
            const lasted = stack.pop();
            if (item !== brackets[lasted]) {
                return false;
            }
        }
    }
    return !stack.length;
};
console.log(isValid('([)]'));

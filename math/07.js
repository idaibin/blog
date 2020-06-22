/**
 * * 对于 n 个元素里取出 m(0<m≤n) 个元素的重复排列数量是 n^m。
 * @param {*} passwordChars
 * @param {*} psLen
 * @param {*} password
 * @param {*} result
 */
function getPassword(passwordChars, psLen, password, result) {
    if (psLen == 0) {
        result.push(password);
    } else {
        for (var i = 0; i < passwordChars.length; i++) {
            getPassword(
                passwordChars,
                psLen - 1,
                password + passwordChars[i],
                result
            );
        }
    }
    return result;
}
const chars = ['a', 'b', 'c', 'd', 'e'];
getPassword(chars, 4, '', []).length;
console.log(5 ** 4);
// result.length;

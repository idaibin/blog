var ary = [1, 3, 5, 7];
var ary2 = [2, 4, 6, 8];

function aryReduce(ary) {
    return ary.reduce(
        (preVal, curVal) =>
            preVal.includes(curVal) ? preVal : [...preVal, curVal],
        []
    );
}

console.log(aryReduce(ary));

function merge(ary1, ary2) {
    const newAry = [];
    let i = 0;
    let j = 0;
    while (i < ary1.length && j < ary2.length) {
        if (ary1[i] < ary2[j]) {
            newAry.push(ary1[i]);
            i++;
        } else {
            newAry.push(ary2[j]);
            j++;
        }
    }
    return newAry;
}
console.log(merge(ary, ary2));

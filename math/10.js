function getStrDistance(a, b) {
    if (a === null || b === null) return -1;
    const d = new Array(a.length)
        .fill(0)
        .map((item, index) => new Array(a.length).fill(0).map(() => 0));
    // c;
    // const d = [];
    for (let i = 0; i < a.length; i++) {
        if (!d[0]) d[0] = [];
        d[0][i] = i;
    }
    for (let j = 0; j < b.length; j++) {
        if (!d[j]) d[j] = [];
        d[j][0] = j;
    }
    d;
}
getStrDistance('mouse', 'mouuse');

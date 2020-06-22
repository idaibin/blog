// 插入排序，a表示数组，n表示数组大小
function insertionSort(a) {
    let n = a.length;
    if (n <= 1) return;
    for (let i = 1; i < n; ++i) {
        let value = a[i];
        let j = i - 1;
        // 查找插入的位置
        for (; j >= 0; --j) {
            if (a[j] > value) {
                // 数据移动
                a[j + 1] = a[j];
            } else {
                break;
            }
        }
        // 插入数据
        a[j + 1] = value;
    }
}
insertionSort([4, 5, 6, 1, 3, 2]);

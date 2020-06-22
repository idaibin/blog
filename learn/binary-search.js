function binarySearch(ary, count, value) {
    let low = 0;
    let high = count - 1;

    while (low <= high) {
        let mid = (low + high) / 2;
        if (ary[mid] == value) {
            return mid;
        } else if (ary[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

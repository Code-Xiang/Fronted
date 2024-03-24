const binarySearch = function (arr, sel) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        // var mid = (low + high) / 2
        var mid = (low + high) >> 1
        if (sel == arr[mid]) {
            return mid
        } else if (sel < arr[mid]) {
            high = mid - 1;
        } else  {
            low = mid + 1;
        }
    }
    return -1;
}

var arr = [1, 3, 5, 6, 7, 8, 9];
var sel = 7;
var index = binarySearch(arr, sel)
console.log("查找下标为：" + index)

const binarySearch2 = function (arr, sel) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = (low+high)>> 1;
        if(sel == arr[mid]) {
            return mid
        } else if (sel < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
var arr = [1, 3, 5, 6, 7, 8, 9];
var sel = 7;
var index = binarySearch2(arr, sel)
console.log("查找下标为：" + index)
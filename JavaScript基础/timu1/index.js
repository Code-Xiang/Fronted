// const reg = /^.+@[^\s\.]+(\.[^\s\.]+){1,2}$/
// const result = reg.test('2690@qq.com')
// console.log('result',result)

// var singleNumber = function(nums) {
//     const targetIndex = {}
//     for(let i =0;i< nums.length;i++){
//         const curNum = nums[i]
//         const preNumIndex = targetIndex[curNum]
//         if(preNumIndex !== undefined ){  // 如果存在则 +1
//             targetIndex[curNum] ++
//         } else {
//             targetIndex[curNum] = 1
//         }
//     }
//     return Object.keys(targetIndex).find(key => targetIndex[key] === 1);;
// };


// console.log(singleNumber([2,2,1]))\

// 快速排序

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}



let arr = [3,2,3,1,2,4,5,5,6]


var findKthLargest = function(nums, k) {
    const arrNums = nums.sort((a,b)=> b-a)
    return arrNums[k-1]
};
console.log(arr.sort((a,b)=> b-a))



// 堆排序 leetcode 215

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heapSize = nums.length
    // 自下而上构建一颗大顶堆
    const buildMaxHeap = (nums, heapSize) => {
        for(let i= Math.floor(heapSize/2)-1;i>=0;i--) {
            maxHeapify(nums,i,heapSize)
        }
    }
    // 交换
    const swap = (a, i, j) => {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    // 从左向右，自上而下的调整节点
    const maxHeapify = (nums,i,heapSize) => {
        let l = i*2+1
        let r = i*2+2
        let largest = i
        if(l < heapSize && nums[l] > nums[largest]){
            largest = l
        }
        if(r<heapSize && nums[r] > nums[largest]) {
            largest = r 
        }
        if (largest !== i) {
            swap(nums, i, largest)
            maxHeapify(nums,largest, heapSize)
        }
    }
    buildMaxHeap(nums,heapSize)
    for(let i = nums.length-1;i>= nums.length-k+1;i--) {
        swap(nums, 0, i)
        --heapSize
        maxHeapify(nums, 0, heapSize)
    }
    return nums[0]
};



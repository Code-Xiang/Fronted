// // let arr = [-1, 0, 1, 2, -1, -4]
 
// // console.log("sort:a->b",arr.sort((a,b) => a-b)); 
// // console.log("sort:a->b",arr.sort()); 

// // let ar1 = [-2,-3,-10,-1]
// // console.log('ar1:', ar1.sort());

// /* 
// sort:a->b [ -4, -1, -1, 0, 1, 2 ]
// sort:a->b [ -1, -1, -4, 0, 1, 2 ]
// ar1: [ -1, -10, -2, -9 ]
// */

// // var trap = function(height) {
// //     let ans = 0;
// //     let left = 0, right = height.length - 1;    //初始化双指针
// //     let leftMax = 0, rightMax = 0;  //左右两边最大高度
// //     while (left < right) {  //循环双指针
// //         leftMax = Math.max(leftMax, height[left]);//左边最大值
// //         rightMax = Math.max(rightMax, height[right]);//右边最大值
// //         if (height[left] < height[right]) {//右边的柱子高于左边的柱子 计算这个位置的接水量 累加进结果
// //             ans += leftMax - height[left];
// //             ++left;
// //         } else {	//左边的柱子高于或等于右边的柱子 计算这个位置的接水量 累加进结果
// //             ans += rightMax - height[right];
// //             --right;
// //         }
// //     }
// //     return ans;
// // };

// var removeDuplicates = function(nums) {
// 	if (nums.length == 0) {
// 		return 0;
// 	}
// 	var slow = 0, fast = 0;
// 	while (fast < nums.length) {
// 		if (nums[fast] != nums[slow]) {
// 			slow++;
// 			// 维护 nums[0..slow] 无重复
// 		  nums[slow] = nums[fast];
// 		}
// 		fast++;
// 	}
// 	// 数组长度索引 +1
// 	return slow + 1;
// }

// let nums = [1,1,2]
// let nums2 = [0,0,1,1,1,2,2,3,3,4]

// res = removeDuplicates(nums2);
// console.log('res:->', res);
// console.log('nums:->', nums2);

function curry(fn) {
	return function curried(...args) {
		if(args.length >= fn.length){
			return fn.apply(this, args)
		} else {
			return function(...moreArgs) {
				return curried.apply(this, args.concat(moreArgs))
			}
		}
	}
}

function add(a,b,c) {
	return a+b+c;
}
const curriedAdd = curry(add)
console.log(curriedAdd(1)(2)(3)); //6
console.log(curriedAdd(1,2)(3)); //6
console.log(curriedAdd(1)(2,3)); //6
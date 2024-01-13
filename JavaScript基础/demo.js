let arr = [-1, 0, 1, 2, -1, -4]
 
console.log("sort:a->b",arr.sort((a,b) => a-b)); 
console.log("sort:a->b",arr.sort()); 

let ar1 = [-2,-3,-10,-1]
console.log('ar1:', ar1.sort());

/* 
sort:a->b [ -4, -1, -1, 0, 1, 2 ]
sort:a->b [ -1, -1, -4, 0, 1, 2 ]
ar1: [ -1, -10, -2, -9 ]
*/

var trap = function(height) {
    let ans = 0;
    let left = 0, right = height.length - 1;    //初始化双指针
    let leftMax = 0, rightMax = 0;  //左右两边最大高度
    while (left < right) {  //循环双指针
        leftMax = Math.max(leftMax, height[left]);//左边最大值
        rightMax = Math.max(rightMax, height[right]);//右边最大值
        if (height[left] < height[right]) {//右边的柱子高于左边的柱子 计算这个位置的接水量 累加进结果
            ans += leftMax - height[left];
            ++left;
        } else {	//左边的柱子高于或等于右边的柱子 计算这个位置的接水量 累加进结果
            ans += rightMax - height[right];
            --right;
        }
    }
    return ans;
};

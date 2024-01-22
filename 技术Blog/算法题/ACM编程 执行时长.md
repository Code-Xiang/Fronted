### 华为OD机试 -执行时长

题目描述：为了充分发挥 GPU 算力，需要尽可能多的将任务交给 GPU 执行，现在有一个任务数组，数组元素表示在这 1 秒内新增的任务个数且每秒都有新增任务，假设 GPU 最多一次执行 n 个任务，一次执行耗时 1 秒，在保证 GPU 不空闲情况下，最少需要多长时间执行完成 。

输入描述：

第一个参数为 GPU 一次最多执行的任务个数，取值范围[1, 10000] ；

第二个参数为任务数组长度，取值范围[1, 10000] ；

第三个参数为任务数组，数字范围[1, 10000] 输出描述：执行完所有任务最少需要多少秒；

题目意思大概是（看图理解）：

![image-20240122201305424](/Users/xiangxuewei/Library/Application Support/typora-user-images/image-20240122201305424.png)

```javascript

function getResult(maxCount,n,tasks) {
    let time = 0;
    let remain = 0;

    for (let task of tasks) {
        if (task + remain > maxCount) {
            // 等待数
            remain = task + remain - maxCount;
        } else {
            remain = 0;
        }
        // 时间都加1
        time += 1;
    }
    // 任务执行完了，还有剩余，
    while (remain > 0) {
        remain -= maxCount;
        time += 1;
    }

    return time;
}
// 算法调用
// 4,5,[5,4,1,1,1])
// 3,5,[1,2,3,4,5]
console.log(getResult(3,5,[1,2,3,4,5]));


```


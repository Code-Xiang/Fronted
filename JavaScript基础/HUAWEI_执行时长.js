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
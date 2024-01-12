# 定义一个快速排序的函数，参数是一个列表
def quick_sort(lst):
    # 如果列表为空或只有一个元素，直接返回
    if len(lst) <= 1:
        return lst
    # 选择列表的第一个元素作为基准值
    pivot = lst[0]
    # 定义两个空列表，用于存放比基准值小和大的元素
    left = []
    right = []
    # 从列表的第二个元素开始遍历
    for i in range(1, len(lst)):
        # 如果元素小于等于基准值，放入左边的列表
        if lst[i] <= pivot:
            left.append(lst[i])
        # 如果元素大于基准值，放入右边的列表
        else:
            right.append(lst[i])
    # 对左右两个列表递归地进行快速排序，然后拼接基准值和排序后的列表，返回结果
    return quick_sort(left) + [pivot] + quick_sort(right)




resut = quick_sort([5,1,9,3,0,7])
print('结果：',resut)

**Js代码，需要其他版本可以通过GPT转换一下。**

#### 1.敏感字段加密

题目描述：【敏感字段加密】给定一个由多个命令字组成的命令字符串：

1、字符串长度小于等于 127 字节，只包含大小写字母，数字，下划线和偶数个双引号；

2、命令字之间以一个或多个下划线_进行分割；

3、可以通过两个双引号""来标识包含下划线_的命令字或空命令字（仅包含两个双引号的命 令字），双引号不会在命令字内部出现； 请对指定索引的敏感字段进行加密，替换为******（6 个*），并删除命令字前后多余的下划线 _。如果无法找到指定索引的命令字，输出字符串 ERROR。 输入描述：输入为两行，第一行为命令字索引 K（从 0 开始），第二行为命令字符串 S。 输出描述：输出处理后的命令字符串，如果无法找到指定索引的命令字，输出字符串 ERROR；

示例1：

输入：1

`password_a12345678_timeout_100`

输出：`password_******_timeout_100`

示例2：

输入：2

`aaa_password_*a12_45678*_timeout_100_""_`

输出：`aaa_password_******_timeout_100_""`



```javascript
function result(k,s) {
    // 遍历s所有字符，用栈来解决
    let stack = [];
    let res = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        // 如果c为"_" 前提下。要么栈为空，要么栈底为双引号。栈底为双引号，表示这个下划线是在双引号里面的。
        // 如果栈底不是双引号，那么这个下划线是命令的分隔符。
        if (c === "_" && (stack.length === 0 || stack[0] !== '"')) {
            res.push(stack.join(""));
            stack = []; //清空栈。
        } else if (c === '"' && stack.length !== 0) {
            // 如果c为双引号",就要判断是左双引号，还是右双引号如果左双引号，栈为空，那么数据就要进栈。
            // 如果栈不为空，说明命令结束了。
            stack.push(c);
            res.push(stack.join("")); // 命令也要加到res中。
            stack = [];
        } else {
            // 其他情况只能添加进栈
            stack.push(c);
        }
    }
    // 总是会忘记这个点，循环完之后，栈有空的或者不为空。假设最后一个没有遇到"_"栈里肯定有数据
    if (stack.length > 0) {
        res.push(stack.join(""));
    }
    // 一句话过滤掉为空的。
    let ans = res.filter(x => x !== "");
    if (k > ans.length - 1) {
        return "ERROR";
    }
    ans[k] = "******";
    return ans.join("_");
}

let k = 1
let s = "password__a12345678_timeout_100"
let k1 = 2
let s1 = `aaa_password_*a12_45678*_timeout_100_""_`
console.log(result(k,s)); // password_******_timeout_100
console.log(result(k1,s1)); // aaa_password_******_45678*_timeout_100_""
```



#### 2.ACM 编程 IPv4 地址转换成整数

题目描述：存在一种虚拟 IPv4 地址，由 4 小节组成，每节的范围为 0~255，以#号间隔，虚拟IPv4 地址可以转换为一个32位的整数，例如：128#0#255#255，转换为 32 位整数的结果为 2147549183（0x8000FFFF） 1#0#0#0，转换为 32 位整数的结果为 16777216（0x01000000）现以字符串形式给出一个虚拟 IPv4 地址，限制第1小节的范围为 1~128，即每一节范围分 别为(1~128)#(0~255)#(0~255)#(0~255)，要求每个 IPv4 地址只能对应到唯一的整数上。如果是非法IPv4，返回 invalid IP输入描述：输入一行，虚拟 IPv4 地址格式字符串输出描述：输出以上，按照要求输出整型或者特定字符补充说明：输入不能确保是合法的 IPv4 地址，需要对非法 IPv4（空串，含有IP地址中不存在的字符，非合法的#分十进制，十进制整数不在合法区间内）进行识别，返回特定错误

示例1

输入：`100#101#1#5`

输出：`1684340997`



输入：`1#2#3`

输出：`incalid IP`

```javascript
function convertHexToDecimal(inp) {
    if (!inp.includes('#')) {
        return 'invalid IP';
    }
    let parts = inp.split("#");

    for (let i = 0; i < parts.length; i++) {
        if (!/^\d+$/.test(parts[i])) {
            return 'invalid IP';
        }
    }
    let l = parts.map(Number);

    if (l.length !== 4 || l[0] > 128) {
        return 'invalid IP';
    }
    for (let i = 1; i < l.length; i++) {
        if (l[i] > 255 || l[i] < 0) {
            return 'invalid IP';
        }
    }
    let tmp = "";
    for (let i of l) {
        let res = Math.floor(i / 16);
        let ans = i % 16;
        tmp += res.toString() + ans.toString();
    }
    return parseInt(tmp, 16)
}

let inp = "100#101#1#5";
let inp1 = "1#2#3";
console.log("1:👉",convertHexToDecimal(inp)); // 1:👉 1684340997
console.log("2:👉",convertHexToDecimal(inp1));  // 2:👉 invalid IP
```



#### 3. ACM 字符匹配

题目描述：给你一个字符串数组（每个字符串均由小写字母组成）和一个字符规律（由小写字母和`.`和`*`*组成），识别数组中哪些字符串可以匹配到字符规律上。 `'.' `匹配任意单个字符，`'*'` 匹配零个或多个任意字符；判断字符串是否匹配，是要涵盖整个字符串的，而不是部分字符串。

输入描述：第一行为空格分割的多个字符串，1<单个字符串长度<100，1<字符串个数<100 第二行为字符规律，1<=字符规律长度<=50 不需要考虑异常场景 输出描述：匹配的字符串在数组中的下标（从 0 开始），多个匹配时下标升序并用,分割，若均不匹配输出-1

示例1

输入：`ab aab abacd`

`.*`

输出：`0,1,2`

示例2

输入：`ab aab`

`a.b`

输出

`1`

```javascript
function isMacrh(s, p) {
    let res = [];
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (new RegExp("^" + p + "$").test(arr[i])) {
        res.push(i);
      }
    }
    if (res.length) {
      return res.join(",");
    } else {
      // 若均不匹配输出-1
      return -1;
    }
  }
  let s1 = "ab aab abacd";
  let p1 = ".*";

  let s2 = "ab aab";
  let p2 = "a.b";

  let s3 = "ab ab";
  let p3 = "a.b";
  console.log("s1,p1👉::",isMacrh(s1, p1)); // s1,p1👉:: 0,1,2
  console.log("s2,p2👉::",isMacrh(s2, p2)); // s2,p2👉:: 1
  console.log("s3,p3👉::",isMacrh(s3, p3)); // s3,p3👉:: -1
```



#### 4.ACM编程 生日礼物[link](https://blog.csdn.net/weixin_54707168/article/details/132201084)

题目描述：小牛的孩子生日快要到了，他打算给孩子买蛋糕和小礼物，蛋糕和小礼物各买一个，他的预算不超过 x 元。蛋糕 cake 和小礼物 gift 都有多种价位的可供选择。

请返回小牛共有多少种购买方案。

输入描述：第一行表示 cake 的单价，以逗号分隔第一行表示 gift 的单价，以逗号分隔第三行表示 x 预算 

输出描述：输出数字表示购买方案的总数 补充说明：

`1 <= cake.length <= 10^5 `

`1 <= gift.length <= 10^5 `

`1 <= cake[i],gift[i] <= 10^5`

` 1 <= x <= 2*10^5`

示例1 -> 👉输入：

10,20,5

5,5,2

15

输出：6

```javascript
function searchLast(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    // 二分查找
    while (low <= high) {
        let mid = (low + high) >> 1; // 找到正在搜索的范围的中间点
        let midVal = arr[mid];
        if (midVal > target) {
            high = mid - 1;
        } else if (midVal < target) {
            low = mid + 1;
        } else {
            if (mid === arr.length - 1 || arr[mid] !== arr[mid + 1]) {
                return mid;
            } else {
                low = mid + 1;
            }
        }
    }
    return -low - 1; // 返回的插入点索引-i-1,将其取正（变为插入点索引）
}

function getResult(cakes, gifts, x) {
    cakes.sort((a, b) => a - b); // [ 2, 5, 10 ] 将蛋糕从小到大排序
    let ans = 0;
    for (let gift of gifts) {  
        if (x <= gift) { // 遍历礼物，仅当手中钱x小于所有礼物的价格才能继续
            continue;
        }
        let maxCake = x - gift; //剩下的钱买蛋糕
        let i = searchLast(cakes, maxCake); // 使用searchLast函数找到满足条件的蛋糕的索引
        if (i >= 0) {
            ans += i + 1;  // 将蛋糕的索引加一，并加入到购买方案总数中
        } else {
            i = -i - 1; // 获取插入点索引
            ans += i; // 将插入点索引加入到购买方案总数中
        }
    }
    return ans;
}

let cakes = "10,20,5".split(",").map(Number); // [ 10, 20, 5 ]
let gifts = "5,5,2".split(",").map(Number); // [ 5, 5, 2 ]

let x = 15;
console.log(getResult(cakes, gifts, x)); // 6
```


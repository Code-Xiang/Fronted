function * gen() {
 yield 1;
 yield 2;
 yield 3;
}

// 这是 ES6 的新 feature， function 后面带 * 的叫做 generator function。函数运行时，
// 返回一个迭代器。

console.log('gen', gen())
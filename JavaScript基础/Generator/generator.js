const { log } = require("console");

/* 
    Generator 函数是ES6提出的异步编程解决方案，它可以避免回调嵌套
*/
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

function* gen1(){
    // some code
}
  
var g = gen1();
log('--', g)
log('==', g[Symbol.iterator]())
console.log(g[Symbol.iterator]() === g); // true

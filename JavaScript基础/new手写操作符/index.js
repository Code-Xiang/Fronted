/* 
    new 一般用于实例化构造函数 或者实例化类 
    实例化之后返回一个对象
*/

function Test(name) {
    this.name = name; // 添加一个属性
    // return [1, 2, 3]
}
Test.prototype.getName = function () {
    return this.name;
}
let test = new Test("test");
console.log(test);
/*  
    1.创建一个空对象
    2.改变对象的原型
    3.改变this的指向
    4.构造函数返回如果是引用类型 那么new操作符无效 否则是生效的
*/

/* 
    接受构造函数
*/

function _new(fn, ...args) {
    let obj = {}
    obj.__proto__ = fn.prototype
}

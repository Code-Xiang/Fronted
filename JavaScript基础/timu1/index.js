/* 
  方法2.5：lodash实现深拷贝
*/
/* 
_.cloneDeep(value)
value : 要深拷贝的值。
返回拷贝后的值
vue 中使用 ：
  	 a. npm i --save lodash     下载依赖
  	 b. import _ from 'lodash'  在 组件 中引入 
  	 c. 用法和下面的一样 
*/
var objects = [{ 'a': 1 }, { 'b': 2 }]; 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false

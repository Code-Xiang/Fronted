let arr = [1,2,3,4]
for(let i in arr ){
	console.log(i)  //i是字符串类型的数字索引  所以打印arr[i+1]会得一个undefined
}
console.log("+++++++++++++");
for(let i of arr){
	console.log(i)  //i是值
}
console.log("+++++++++++++");

for(let i =0;i<arr.length;i++){
	console.log(i)  //i是数字索引
}
console.log("+++++++++++++");

let obj ={
	name:'boy'
}
for(let i in obj){
	console.log(i)  //i是字符串键名
}
//对象循环没有let key of 遍历
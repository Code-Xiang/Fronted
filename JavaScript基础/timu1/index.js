const reg = /^.+@[^\s\.]+(\.[^\s\.]+){1,2}$/
const result = reg.test('2690@qq.com')
console.log('result',result)
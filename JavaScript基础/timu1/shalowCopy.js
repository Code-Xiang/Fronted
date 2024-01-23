/* 
    方法1.1：扩展运算符（最简单的方式）
*/
const originalObject = { a: 1, b: 2, c: { d: 3,e: 4 } };
const shallowCopy = { ...originalObject };

originalObject.a = 10;
console.log(shallowCopy.a); // 输出 1
console.log(originalObject.a); // 输出 10

originalObject.c.d = 11;
console.log(shallowCopy.c.d); // 输出 11
console.log(originalObject.c.d); // 输出 11

/* 
`shallowCopy` 是通过对象的展开语法 `{ ...originalObject }` 进行浅拷贝的。
浅拷贝会创建原始对象的一个新对象，并将原始对象的属性复制到新对象中。
对于原始对象的基本属性（比如 `a`），浅拷贝会创建新的属性，而这个新属性与原始对象的属性是相互独立的。
然而，对于对象的属性（比如 `c`）, 浅拷贝只会复制引用，而不会复制引用指向的对象。
这就是为什么在修改 `originalObject.c.d` 的值时，`shallowCopy.c.d` 的值也会发生变化的原因，因为它们引用相同的对象。
但是，当你对 `originalObject.c` 中的对象进行修改（比如 `originalObject.c.e = 12`）时，
由于 `shallowCopy.c` 与 `originalObject.c` 引用的是同一个对象，所以 `shallowCopy.c.e` 的值也会发生变化。
总的来说，浅拷贝是一层深的拷贝，它只会复制对象的引用而不是对象本身。如果对象的属性值是基本类型，
那么这些属性就会被复制；但如果属性值是对象，那么浅拷贝只会复制对象的引用，而不会创建新的对象。
*/
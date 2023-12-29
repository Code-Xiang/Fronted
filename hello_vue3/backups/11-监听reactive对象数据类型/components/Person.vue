<!--  -->
<template>
  <div class="person">
    <h1>情况三：监视【 reactive 】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changName">修改名字</button>
    <button @click="changAge">修改年龄</button>
    <button @click="changePerson">修改all</button>
    <hr>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="test">点击测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";
// 数据
let person = reactive({
  name: "张三",
  age: 18,
});
let obj = reactive({
  a:{
    b:{
      c: 666
    }
  }
})
// 方法
const changName = () => {
  person.name += "~";
};
const changAge = () => {
  person.age += 1;
};
const changePerson = () => {
  // person = { name: "李四", age: 90 };
  Object.assign(person, { name: "李四", age: "80" });
};
// 点击测试按钮
const test = () => {
  obj.a.b.c = 888
}
/* 监视,情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
newValue, oldValue 值没变，因为地址值没有变 */
watch(person, (newValue, oldValue) => {
  console.log("person变化", newValue, oldValue);
});
watch(obj,(newValue,oldValue)=>{
  console.log('Obj变化了',newValue,oldValue);
})
</script>
<style scoped>
.person {
  background-color: skyblue;
  /* 记住 0 0 10px 好看 */
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
</style>

<!--  -->
<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>姓名：{{ person.age }}, {{ nl }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRefs, toRef } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
});
// 解构赋值 
let { age, name } = toRefs(person);
// 传入对象，需要单独拎出来，需要响应式改变的值
let nl = toRef(person, 'age')

console.log('nl', nl.value);
const changeName = () => {
  name.value += "~";
};
const changeAge = () => {
  age.value += 1;
};
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

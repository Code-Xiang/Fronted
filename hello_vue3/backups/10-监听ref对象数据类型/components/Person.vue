<!--  -->
<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changName">修改名字</button>
    <button @click="changAge">修改年龄</button>
    <button @click="changePerson">修改all</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from "vue";
// 数据
let person = ref({
  name: "张三",
  age: 18,
});
// 方法
const changName = () => {
  person.value.name += "~";
};
const changAge = () => {
  person.value.age += 1;
};
const changePerson = () => {
  person.value = { name: "李四", age: 90 };
};
/* alt+shift+a
监视 情况一，监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化【即上方的name,age】，需要手动开启深度监视
修改对象中属性的时候，newValue和oldValue是同一个值
修改对象时候则分新旧值
 */
watch(person,(newValue,oldValue) => {
  console.log('person变化了',newValue,oldValue);
},{
  deep: true,
  immediate: true // 立即监视，只要一上来不管数据有没有变化都要监视一次
})


/* 
watch的第一个参数是：被监视的对象
watch的第二个参数是：监视的回调
watch的第三个参数是：配置的参数
 */

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

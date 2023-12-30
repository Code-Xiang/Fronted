<!--  -->
<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";
// 数据
let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
  },
});
// 方法
const changeName = () => {
  person.name += "~";
};
const changeAge = () => {
  person.age += 1;
};
const changeC1 = () => {
  person.car.c1 = "奥迪";
};
const changeC2 = () => {
  person.car.c2 = "大众";
};
const changeCar = () => {
  person.car = { c1: "雅迪", c2: "艾玛" };
};
/* 
  监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
() => {
  return person.name
}
  只监视person.name
*/
watch(
  () => person.name,
  (newValue, oldValue) => {
    console.log("person.name发生变化了", newValue, oldValue);
  }
);
/* 
 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
 对象类型默认走的是地址值，地址值加deep,就可以监视到

  当没写函数时： 加入deep，可以监视到里面的属性，监视不到整体修改
  当写函数时：加入deep，可以监视到里面的属性，同时也可以监视到整体的修改
*/
watch(
  () => person.car,
  (newValue, oldValue) => {
    console.log("person.car", newValue, oldValue);
  },{
    deep: true
  }
);
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

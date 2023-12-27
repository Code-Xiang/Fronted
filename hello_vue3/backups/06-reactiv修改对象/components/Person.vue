<!--  -->
<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeCar">修改汽车</button>
  </div>
  <hr />
  <h2>当前求和为：{{ sum }}</h2>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from "vue";
let car = reactive({ brand: "奔驰", price: 100 });
let car2 = ref({ brand: "奔驰", price: 100 });
let sum = ref(0);
function changePrice() {
  car.price += 10;
}
function changeCar() {
  Object.assign(car, { brand: "奥拓", price: 1 });
  car2.value = {brand: "奥拓", price: 1}
}
</script>
<style scoped>
.person {
  background-color: skyblue;
  /* 记住 0 0 10px 好看 
     */
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
</style>

<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我</button>
    <hr>
    <img v-for="(item,index) of dogList" :src="item" :key="index">
    <button @click="addDog">再来一只狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref,reactive } from 'vue'
import axios from 'axios'
// https://dog.ceo/api/breed/pembroke/images/random
let sum = ref(0)
let dogList = reactive([
  'https://images.dog.ceo/breeds/pembroke/n02113023_631.jpg',
  'https://images.dog.ceo/breeds/pembroke/n02113023_7243.jpg',
  'https://images.dog.ceo/breeds/pembroke/n02113023_14262.jpg'
])
function add() {
  sum.value += 1;
}
function addDog() {
  axios.get('https://dog.ceo/api/breed/pembroke/images/random').then(
    
  )
}
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
img {
  height: 100px;
}
</style>

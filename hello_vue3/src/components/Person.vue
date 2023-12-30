<template>
  <div class="person">
    <h2>需求： 当水温达到60℃,或水位达到80cm时，给服务器发送请求</h2>
    <h2>当前求和为： {{ temp }}℃</h2>
    <h2>当前水位： {{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水温+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from "vue";

// 数据
let temp = ref(0);
let height = ref(0);
// 方法
function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 10;
}

// 监视
/* watch([temp,height],(value)=>{
  console.log(value);
  let [newHeight,newTemp] = value
  if (newTemp>= 60 || newHeight >= 80) { 
      console.log('给服务器发请求');
  }
}) */
// watchEffect 一上来就监视一次，不需要指名道姓，很智能
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log("给服务器发送请求");
  }
});
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

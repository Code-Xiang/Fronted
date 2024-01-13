<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点击输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, defineExpose } from 'vue'
let title2 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)

const showLog = () => {
  console.log(title2.value);
}
// 给父组件开权限，给父组件看
defineExpose({a,b,c})
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

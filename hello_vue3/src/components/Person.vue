<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
    <textarea disabled name="" id="text_fn" cols="30" rows="10" style="resize:none;border: none; background: none;" readonly>{{ changeword }}</textarea>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated, onBeforeUnmount, onUnmounted, computed } from 'vue'
let sum = ref(0)
const add = () => {
  sum.value += 1
}

// 创建 beforeCreate created => setup
console.log('创建');
const changeword = computed(() => {
  let str = "请选择下列啊寄快递hi啊图，然后怎么..."
  let wordsArray = str.split('，');
  return wordsArray.join('，\n');
})
// 挂载
onBeforeMount(() => {
  console.log('挂载前');
})
computed(()=>{

})
// 挂载完毕
onMounted(() => {
  console.log('子---挂载完毕');
})

// 更新前
onBeforeUpdate(()=> {
  console.log('更新前');
  
})
// 更新完毕
onUpdated(()=> {
  console.log('更新完毕');
})

// 卸载前
onBeforeUnmount(()=> {
  console.log('卸载前');
})

// 卸载完毕
onUnmounted(() => {
  console.log('卸载完毕');
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

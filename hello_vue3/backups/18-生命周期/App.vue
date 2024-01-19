<template>
  <!-- 先挂载子组件中的Person 在解析下面的-->
  <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref, onMounted } from 'vue'
const isShow = ref(true)
// 挂载完毕
onMounted(() => {
  console.log('父---挂载完毕');
})
</script>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>

<template>
  <Person ref="ren"/>
  <button @click="showLog">输出abc</button>
</template>

<script lang="ts" setup name="App">
import { ref } from "vue";
import Person from "./components/Person.vue";
let ren = ref();
const showLog = () => {
  console.log(ren.value);

}
</script>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>

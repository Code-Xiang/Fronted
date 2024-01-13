<template>
  <div class="person">
    ???
  </div>
</template>

<script lang="ts" setup name="Person"> 
import { ref } from 'vue'
import { type PersonInter, type Persons } from '@/types'
// let person:PersonInter = { id: "asyud7asd", name: "张三", age: 60 };
let personList:Persons = [
  {
    id: "asyud7asd", name: "张三", age: 60 
  },
  {
    id: "asyud7as2", name: "李四", age: 61 
  },
  {
    id: "asyud7as2", name: "王五", age: 6 
  },
]
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

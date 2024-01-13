<template>
  <Person a="哈哈" :list="personList"/>
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { reactive } from 'vue'
import { type PersonInter, type Persons } from '@/types'

/* 
  reactive直接传泛型
*/
let personList = reactive<Persons>([
  {
    id: "asyud7asd", name: "张三", age: 60 
  },
  {
    id: "asyud7as2", name: "李四", age: 61 
  },
  {
    id: "asyud7as1", name: "王五", age: 6, x:66
  },
])
</script>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>

<template>
  <div class="person">
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }} -- {{ item.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
import {  defineProps, withDefaults } from "vue";
import { type Persons } from '@/types'
// 接受a
// defineProps(['a'])

// 只接受list
// defineProps(["list"]);

// 接受list+限制类型
// defineProps<{list:Persons}>()

// 接受list + 限制类型 + 限制必要性:? + 指定默认值
withDefaults(defineProps<{list?:Persons}>(),{
  list:() => [{id:'22',name:'奶头乐',age: 19}]
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

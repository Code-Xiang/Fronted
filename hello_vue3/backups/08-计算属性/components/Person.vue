<!--  -->
<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" /> 名：<input
      type="text"
      v-model="lastName"
    />
    <button @click="changeFullName">将全名改为li-si</button>
    全名：<span>{{ fullName }}</span> 全名2：<span>{{ fullName2 }}</span>
  </div>
</template>

<script lang="ts" setup name="Person">
import { computed, ref } from "vue";
let firstName = ref("张");
let lastName = ref("三");
/* 
    vue3中定义的fullname其实是一个响应式的ref
  */
// 这么定义的fullname是个计算属性，可读不可写
let fullName = computed(() => {
  return (
    firstName.value.slice(0, 1).toUpperCase() +
    firstName.value.slice(1) +
    "-" +
    lastName.value
  );
});
// 这么定义的fullname是个计算属性，可读可写
let fullName2 = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      "-" +
      lastName.value
    );
  },
  set(val) {
    const [str1, str2] = val.split("-");
    firstName.value = str1;
    lastName.value = str2;
  },
});
function changeFullName() {
  fullName2.value = "li-si";
  console.log(fullName.value);
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
</style>

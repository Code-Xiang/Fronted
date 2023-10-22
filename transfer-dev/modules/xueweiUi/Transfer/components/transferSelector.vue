<!--选择器 -->
<template>
  <select name="" id="" @change="selectChange($event.target.value)">
    <option v-for="(title, index) of data" :value="index" :key="index">{{ title }}</option>
  </select>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Array,
      default: () => []
    }
  })
  const emit = defineEmits(['selectChange']);
  const selectChange = (value) => {
    emit('selectChange', value);
  }
</script>

<style scoped></style>

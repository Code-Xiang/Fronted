<!--  -->
<template>
  <div v-for="item of data" :key="item.id" :class="['list-item', item.disabled ? 'disabled' : '']" :draggable="!item.disabled" @dragstart="dragedItem(item)">
    <input
      type="checkbox"
      :disabled="item.disabled"
      :id="'__checkbox__' + item.id"
      @click="checkboxClick($event.target.checked, leftOrRight, item)"
    />
    <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  leftOrRight: {
    type: String,
    validator(value) {
      return ['left', 'right'].includes(value)
    }
  }
})
const emit = defineEmits(['checkboxClick'])
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const checkboxClick = (checked, leftOrRight, item) => {
  emit('checkboxClick', checked, leftOrRight, item)
}
const dragedItem = (item) => {
  emit('dragedItem', item)
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  height: 30px;
  color: #666;
  font-size: 12px;
  &.disabled {
    opacity: 0.6;
  }
}
</style>

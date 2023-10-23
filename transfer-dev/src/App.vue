<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { Transfer } from '../modules/xueweiUi'
import { Select } from '../modules/xueweiUi'
import { ySelect } from "@/components/select/ySelect.vue";
import { yOption } from "@/components/select/yOption.vue";
const data = [
  {
    title: '华为',
    data: [
      {
        id: 1,
        phone_name: 'Mate 40 Pro',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'Mate 50 Pro',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'Mate 60 Pro',
        disabled: true
      },
      {
        id: 4,
        phone_name: 'Mate Xs Pro',
        disabled: false
      },
    ]
  },
  {
    title: '小米',
    data: [
      {
        id: 1,
        phone_name: 'MI 40 Pro',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'MI 50 Pro',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'MI 60 Pro',
        disabled: true
      },
      {
        id: 4,
        phone_name: 'MI Xs Pro',
        disabled: false
      },
    ]
  },
  {
    title: 'iphone',
    data: [
      {
        id: 1,
        phone_name: 'iphone 11 Pro',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'iphone 12 Pro',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'iphone 13 Pro',
        disabled: true
      },
      {
        id: 4,
        phone_name: 'iphone 14 Pro',
        disabled: false
      },
    ]
  }
]
const myValue = ref('key5')
const options = ref([
  { key: "key1", label: "选项1" }, { key: "key2", label: "选项2" }, { key: "key3", label: "选项3" }, { key: "key4", label: "选项4changhcadfjadfajhjfkjg" }, { key: "key5", label: "选项5" }, { key: "key6", label: "选项6" }, { key: "key7", label: "选项7" },

])
</script>

<template>
  <div>
    <transfer :data="data" right-title="已选择机型1"></transfer>
  </div>
  <div>
    <div>---------------------------</div>
    <div>---------------------------</div>
    <select></select>
  </div>
  <div>
    <!-- <hello-world></hello-world> -->
    <y-select v-model="myValue">
      <y-option v-for="item in options" :label="item.label" :value="item.key" :key="item.key"></y-option>
    </y-select>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Transfer } from '../modules/xueweiUi'
// import {  Transfer } from '@/components/xueweiUi'
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
</script>

<template>
    <div>
      <transfer :data="data" right-title="已选择机型1"></transfer>
    </div>
</template>

<style scoped>
</style>

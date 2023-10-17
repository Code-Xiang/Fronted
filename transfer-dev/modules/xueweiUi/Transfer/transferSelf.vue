<template>
  <div class="about">
    <div>
      <select name="" id="" @change="setTargetIndex($event.target.value)">
      <option v-for="(title, index) of options" :value="index" :key="index">{{ title }}</option>
    </select>
    </div>
    <div class="transfer">
      <div class="box left-list">
        <h1 class="list-title">{{ leftTitle }}</h1>
        <div>

        </div>
      </div>
      <div class="box button-group">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
      <div class="box right-list">
        <h1 class="list-title">{{ rightTitle }}</h1>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import propsDefination from './extends/props'
import { useTargetIndex, useComputedData }   from './extends/hooks'
const props = defineProps(propsDefination)
const options = props.data.map(({  title }) => title)
const [ targetIndex,setTargetIndex] = useTargetIndex(0);
const { leftTitle } = useComputedData(props.data, targetIndex);
</script>
<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
  }
}
</style>

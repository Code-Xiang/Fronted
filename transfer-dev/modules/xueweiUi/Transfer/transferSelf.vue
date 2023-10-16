<template>
  <div class="about">
    <h1>XXW UI</h1>
  </div>
</template>
 <script setup>
 import propsDefination from './extends/props';
  const props = defineProps(propsDefination)
  console.log(props.data, props.rightTitle);
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

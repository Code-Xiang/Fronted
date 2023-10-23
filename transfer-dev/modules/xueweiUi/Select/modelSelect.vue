<!-- 自定义筛选框 -->
<template>
    <div id="myselelct">
        <div class="title" @click="showOption = !showOption">
            <span>{{ choiceTitle }}</span>
            <span class="icon">﹀</span>
        </div>
        <div v-show="showOption">
            <div v-for="ch in options" :key="ch.key" @click="changeOption(ch.key)">
                {{ ch.text }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const showOption = ref(false);
const props = defineProps({
  choiceTitle: {
        type: String,
        default: '选择下拉'
    }
})
</script>

<style lang='scss' scoped>
  #myselelct {
    display: inline-block;
    padding: 5px;
    cursor: default;
    .title {
      .icon {
        margin-left: 5px;
        vertical-align: middle;
      }
    }
  }
</style>

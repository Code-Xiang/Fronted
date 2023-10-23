<template>
    <div id="option" class="y-option" ref="option">
      <div class="content" @click="clickItem">
        {{ label }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["label", "value"], // label是选项文字，vaue是选项值
    inject: ["select"], // 接收select组件中的provide数据,"select"就是父组件的this
    created() {
      // 将自身的label和value，push到给select父组件的options中
      this.select.options.push({
        label: this.label,
        value: this.value,
      });
    },
    methods: {
      clickItem() {
        // 改变select中当前选中的元素
        this.select.curValue = this.value;
        this.select.curLabel = this.label;
        // 调用select中的方法，收起下拉选框
        this.select.showOption();
      },
    },
  };
  </script>
  
  <style scoped lang='scss'>
  .content {
    color: #666;
    border-right: 1px solid #666;
    border-left: 1px solid #666;
    border-bottom: 1px solid #666;
    padding: 5px 30px 5px 6px;
    text-align: left;
    cursor: pointer;
    /* 一行显示，超长省略号 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>
  
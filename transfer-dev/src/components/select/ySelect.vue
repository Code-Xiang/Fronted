<template>
    <div id="select" class="y-select" :style="{ width: width + 'px' }">
      <div class="title">
        <span v-if="!curLabel" class="placeholder">{{ placeholder }}</span>
        <span v-else>{{ curLabel }}</span>
        <span class="icon" @click="showOption">﹀</span>
      </div>
      <div class="option" v-show="isShow">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      placeholder: {      // 暗字
        type: String,
        default: "请选择",
      },
      value: { // 接收父组件传入的value，名字必须value，这样父组件才能用v-model绑定
        type: [Number, String],
      },
      width: {  // 宽度
        type: Number,
        default: 200,
      },
    },
    // 向插槽中的组件传入数据，传入当前组件的this，在option组件中可以直接访问
    provide() {
      return {
        select: this,
      };
    },
    data() {
      return {
        isShow: false, // 是否下拉
        curLabel: "", // 当前选中的文字
        curValue: "", // 当前选中的value
        options: [],  // 存储插值中的所有option，在option组件的created时push
      };
    },
    mounted() {
      // 与父组件传入的value对比，确定当前选中的curvalue
      let curOption = this.options.filter((item) => item.value === this.value);
      if (curOption.length > 0) {
        this.curLabel = curOption[0].label;
        this.curValue = curOption[0].value;
      }
    },
    methods: {
      showOption() {   // 点击下拉按钮，收起/展开options
        this.isShow = !this.isShow;
      },
    },
    watch: {
      // 当前选中项变化，触发input事件，父元素既可以使用v-model监听
      curValue() {
        this.$emit("input", this.curValue);
      },
    },
  };
  </script>
  
  <style scoped lang='scss'>
  .y-select {
    color: #666;
    display: inline-block;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding: 3px 6px;
    border: 1px solid #666;
    color: #666;
  }
  .title span {
    /* 一行显示，超长省略号 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .placeholder {
    color: #bbb;
  }
  .icon {
    cursor: pointer;
  }
  </style>
  
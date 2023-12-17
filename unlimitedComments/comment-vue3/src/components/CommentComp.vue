<template>
  <div class="content">
    <li v-for="item of props.data" :key="item.id">
      <p>{{ item.username }}</p>
      <p>{{ item.comment }}</p>
      <a href="javascript:;" @click="setReplyFlag(item)">回复</a>
      <div v-if="item.isReply">
        <p>
          <textarea v-model="item.replyText"></textarea>
        </p>
        <p>
          <button @click="addReply(item)">提交回复</button>
        </p>
      </div>
      <div v-if="item.children">
        <ul>
          <CommentComp :data="item.children" @add-reply="addReply" :user-info="userInfo"></CommentComp>
        </ul>
      </div>
    </li>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
  userInfo: Object
});
const emit = defineEmits(["addReply"]);

const setReplyFlag = (item) => {
  item.isReply = !item.isReply;
};
const addReply = (item) => {
  const replyText = item.replyText;
  emit("addReply",item, replyText, props.userInfo);
  item.isReply = false;
  item.replyText = "";
};
</script>

<style lang="scss" scoped></style>

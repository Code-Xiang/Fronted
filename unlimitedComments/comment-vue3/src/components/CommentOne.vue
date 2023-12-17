<!-- 评论区1 -->
<template>
  <div>
    <div class="content">
      <p><textarea v-model="state.commentText"></textarea></p>
      <p><button @click="addComment(userInfoStore.userInfo)">提交评论</button></p>
    </div>
    <div>
      <ul>
        <comment-comp
          :data="state.commentTree"
          @add-reply="addReply"
          :user-info="userInfoStore.userInfo"
        ></comment-comp>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import useUserInfoStore from "@/store/user";
import CommentComp from "@/components/CommentComp";
import Comment from "./Comment";
const userInfoStore = useUserInfoStore();
const { state, addReply, addComment } = new Comment("one");
</script>

<style lang="scss" scoped></style>

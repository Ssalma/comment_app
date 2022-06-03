<template>
  <div class="reply">
    <div class="reply__content">
      <div class="reply__content-image">
        <img :src="currentUser.image" alt="" />
      </div>
      <c-comment class="comment-component" v-model="content"></c-comment>
      <div class="image-btn" @click="closeReply">
        <img src="@/assets/images/close.svg" alt="" />
      </div>
      <c-button
        @press="sendReply"
        class="btn"
        type="button"
        :loading="btnLoading"
        >{{ btnType }}</c-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { db } from "../firebase/db";
// import firebase from "firebase/app";
import "firebase/firestore";
import CButton from "./Button.vue";
import CComment from "./CommentBox.vue";
export default {
  components: { CButton, CComment },
  props: {
    btnType: {
      type: String,
      default: "SEND",
    },
    btnLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "getCurrentUser",
    }),
  },
  data: () => ({
    content: "",
  }),
  methods: {
    async sendReply() {
      this.$emit("sendReplyMessage", this.content);
    },
    closeReply() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.reply {
  display: grid;
  grid-gap: 14px;
  background: $white;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
  .comment-component {
    display: flex;
  }
  .comment-component-mobile {
    display: flex;
  }
  &__content {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    grid-gap: 14px;
    &-image {
      width: 34px;
      height: 34px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .btn {
    position: absolute;
    right: 0;
  }
  .image-btn {
    position: absolute;
    right: 0px;
    top: 0px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    .comment-component {
      display: grid;
      width: 82%;
    }
    .comment-component-mobile {
      display: none;
    }
    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .btn {
      position: relative;
      right: 0px;
    }
  }
}
</style>

<template>
  <div class="reply">
    <div class="reply__content">
      <div class="reply__content-image">
        <img :src="currentUser.image" alt="" />
      </div>
      <c-comment class="comment-component" v-model="content"></c-comment>
      <c-button
        @press="sendComment"
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
import { db } from "../firebase/db";
// import firebase from "firebase/app";
// import "firebase/firestore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import CButton from "./Button.vue";
import CComment from "./CommentBox.vue";
export default {
  components: { CButton, CComment },
  props: {
    btnType: {
      type: String,
      default: "SEND",
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "getCurrentUser",
    }),
  },
  data: () => ({
    content: "",
    btnLoading: false,
  }),
  methods: {
    formatDate(value) {
      if (!value) return "-";
      const distance = formatDistanceToNow(value, {
        addSuffix: true,
      }).replace("about ", "");
      return `${distance}`;
    },
    async sendComment() {
      const { currentUser } = this;
      const { image, username } = currentUser;
      const newDate = this.formatDate(new Date());
      const date = Date.now();
      this.btnLoading = true;
      const database = await db.collection("comments").doc();
      const { id } = database;
      this.content !== ""
        ? await database
            .set({
              id: id,
              content: this.content,
              date: date,
              user: {
                image: image,
                username: username,
              },
              createdAt: newDate,
              score: 0,
              replies: [],
            })
            .then(() => {
              this.content = "";
              this.btnLoading = false;
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            })
        : window.alert("Please enter a comment");
      this.btnLoading = false;
      this.content = "";
      this.$store.dispatch("getCommentsAction");
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

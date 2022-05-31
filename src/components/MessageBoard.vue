<template>
  <div v-for="comment in comments" :key="comment.id">
    <div class="chat">
      <div class="chat__details">
        <profile :user="{ ...comment.user, createdAt: comment.createdAt }" />
        <p class="content-text">{{ comment.content }}</p>
      </div>
      <div class="chat__buttons">
        <counter :count="comment.score" />
        <div class="desktop__btn__wrapper-mobile">
          <c-button
            v-if="comment.user.username !== currentUser.username"
            variant="secondary"
            class="button__mobile"
            reply
            >Reply</c-button
          >
          <div
            class="reply__delete--btns-mobile"
            v-if="comment.user.username === currentUser.username"
          >
            <c-button variant="secondary" class="button__mobile" deleteIcon
              >Delete</c-button
            >
            <c-button
              variant="secondary"
              class="button__mobile"
              edit-btn
              editIcon
              >Edit</c-button
            >
          </div>
        </div>
      </div>
      <div class="desktop__btn__wrapper">
        <c-button
          v-if="comment.user.username !== currentUser.username"
          variant="secondary"
          class="button__desktop"
          reply
          >Reply</c-button
        >
        <div
          class="reply__delete--btns"
          v-if="comment.user.username === currentUser.username"
        >
          <c-button
            variant="secondary"
            class="button__desktop delete-btn"
            deleteIcon
            >Delete</c-button
          >
          <c-button
            variant="secondary"
            class="button__desktop"
            edit-btn
            editIcon
            >Edit</c-button
          >
        </div>
      </div>
    </div>
    <div class="replies" v-if="comment.replies.length !== 0">
      <c-replies :replies="comment.replies" :currentUser="currentUser" />
    </div>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Counter from "./Counter.vue";
import CButton from "./Button.vue";
import CReplies from "./Replies.vue";
export default {
  components: {
    Profile,
    Counter,
    CButton,
    CReplies,
  },
  data: () => ({}),
  methods: {},
  mounted() {
    this.$store.dispatch("getCommentsAction");
    this.$store.dispatch("getCurrentUserAction");
  },
  computed: {
    comments() {
      return this.$store.getters.getComments;
    },
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
  },
};
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  background: $white;
  padding: 12px;
  border-radius: 8px;
  // border: 1px solid red;
  margin-bottom: 15px;
  // min-height: 100px;
  .content-text {
    font-size: 16px;
    color: $grayish-blue;
  }
  .desktop__btn__wrapper {
    display: none;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
  }
  .desktop__btn__wrapper-mobile {
    display: flex;
  }
  .reply__delete--btns-mobile {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid: 1fr / max-content auto;
    grid-gap: 20px;
    position: relative;
    .button__mobile {
      display: none;
    }
    &__buttons {
      grid-row: 1;
      margin-top: 0px;
    }

    .desktop__btn__wrapper {
      display: flex;
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .reply__delete--btns {
      display: flex;
    }
    .desktop__btn__wrapper-mobile {
      display: none;
    }
  }
}
.replies {
  display: grid;
  justify-self: flex-end;
  grid-gap: 10px;
  border-left: 1px solid rgba(195, 196, 239, 0.6);
  margin: 12px 0;
  padding-left: 12px;
  // border: 1px solid green;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding-left: 40px;
  }
}
</style>

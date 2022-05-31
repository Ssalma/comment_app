<template>
  <div class="chat" v-for="reply in replies" :key="reply.id">
    <div class="chat__details">
      <profile :user="reply.user" />
      <p class="content-text">{{ reply.content }}</p>
    </div>
    <div class="chat__buttons">
      <counter :count="reply.score" />
      <div class="desktop__btn__wrapper-mobile">
        <c-button
          v-if="reply.user.username !== currentUser.username"
          variant="secondary"
          class="button__mobile"
          reply
          >Reply</c-button
        >
        <div
          class="reply__delete--btns-mobile"
          v-if="reply.user.username === currentUser.username"
        >
          <c-button variant="secondary" class="button__mobile" deleteIcon
            >Delete</c-button
          >
          <c-button variant="secondary" class="button__mobile" edit-btn editIcon
            >Edit</c-button
          >
        </div>
      </div>
    </div>
    <div class="desktop__btn__wrapper">
      <c-button
        v-if="reply.user.username !== currentUser.username"
        variant="secondary"
        class="button__desktop"
        reply
        >Reply</c-button
      >
      <div
        class="reply__delete--btns"
        v-if="reply.user.username === currentUser.username"
      >
        <c-button
          variant="secondary"
          class="button__desktop delete-btn"
          deleteIcon
          >Delete</c-button
        >
        <c-button variant="secondary" class="button__desktop" edit-btn editIcon
          >Edit</c-button
        >
      </div>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
// import { useStore } from "vuex";
import Profile from "./Profile.vue";
import Counter from "./Counter.vue";
import CButton from "./Button.vue";
export default {
  components: {
    Profile,
    Counter,
    CButton,
  },
  props: {
    replies: {
      type: Array,
    },
    currentUser: {
      type: Object,
    },
  },
  // setup() {
  //   const store = useStore();

  //   store.dispatch("getCurrentUserAction");
  //   const currentUser = computed(() => {
  //     return store.state.currentUser;
  //   });

  //   return {
  //     currentUser,
  //   };
  // },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  background: $white;
  padding: 12px;
  border-radius: 8px;
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
</style>

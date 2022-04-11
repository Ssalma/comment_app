<template>
  <div class="reply" v-if="isOpen">
    <div class="reply__box">
      <div class="profile-picture">
        <img :src="currentUser.image.png" alt="icon" class="image" />
        <button class="reply__btn mobile" @click="$emit('reply', createdReply)">
          REPLY
        </button>
      </div>
      <textarea
        type="text"
        v-model="replyMessage.content"
        class="message-box"
      />
      <button class="reply__btn" @click="$emit('reply', createdReply)">
        REPLY
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "reply",
  props: {
    currentUser: {
      type: Object,
    },
    open: {
      type: Boolean,
    },
    target: {
      type: Boolean,
    },
    // message: {
    //   type: Object,
    // },
  },
  data: () => ({
    replyMessage: {
      content: "",
      createdAt: new Date(),
      score: "0",
      replyingTo: "",
      user: {
        image: {
          png: "",
        },
        username: "",
      },
    },
  }),
  computed: {
    isOpen() {
      return this.open || false;
    },
    istarget() {
      return this.target || false;
    },
    createdReply() {
      const { replyMessage } = this;
      return replyMessage;
    },
  },
};
</script>

<style lang="scss" scoped>
.reply__box {
  width: 100%;
  height: auto;
  background: $very-light-grey;
  border-radius: 6px;
  padding: 24px;
  display: grid;
  margin: 20px 0;
  // border: 1px solid red;
  @media screen and (min-width: 768px) {
    display: grid;
    grid: 1fr / max-content auto max-content;
    grid-gap: 24px;
  }
  .profile-picture {
    grid-row: 2;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .image {
      width: 32px;
      height: 32px;
    }
    @media screen and (min-width: 768px) {
      grid-row: 1;
      margin-top: 0;
    }
  }
  .message-box {
    border: 1px solid $moderate-blue;
    border-radius: 6px;
    background: transparent;
    width: 100%;
    padding: 10px 24px;
    color: $grayish-blue;
    font-size: 16px;
    font-weight: 400;
    height: 90px;
    @media screen and (min-width: 768px) {
    }
  }
  .reply__btn {
    background: $moderate-blue;
    color: $white;
    border: none;
    border-radius: 6px;
    padding: 0 10px;
    height: 30px;
    display: none;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  .mobile {
    display: block;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
*:focus {
  outline: none;
}
</style>

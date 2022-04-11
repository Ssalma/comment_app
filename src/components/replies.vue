<template>
  <div v-for="reply in replies" :key="reply.id" class="chat__box">
    <div class="chat__box--counter">
      <div class="chat__box--counter-item">
        <img
          src="@/assets/images/icon-plus.svg"
          alt="icon"
          class=""
          @click="increaseCount(reply.id)"
        />
        <p class="count">{{ reply.score }}</p>
        <img
          src="@/assets/images/icon-minus.svg"
          alt="icon"
          @click="decreaseCount(reply.id)"
        />
      </div>
      <div class="reply-mobile">
        <img src="@/assets/images/icon-reply.svg" alt="icon" />
        <p>Reply</p>
      </div>
    </div>
    <div class="chat__box--content">
      <div class="chat__box--content-info">
        <div class="profile-wrapper">
          <div class="profile-picture">
            <img :src="reply.user.image.png" alt="icon" class="image" />
          </div>
          <p class="name">{{ reply.user.username }}</p>
          <p class="period">{{ reply.createdAt }}</p>
        </div>
        <button class="reply">
          <img src="@/assets/images/icon-reply.svg" alt="icon" />
          Reply
        </button>
      </div>
      <div class="chat__box--content-message">
        <p>
          <span>@{{ reply.replyingTo }}</span> {{ reply.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Replies",
  props: {
    replies: {
      type: Array,
    },
  },
  methods: {
    increaseCount(id) {
      const initial = this.replies.find((item) => {
        item.id === id && item.score++;
      });
      return initial;
    },
    decreaseCount(id) {
      const initial = this.replies.find((item) => {
        item.id === id && item.score--;
      });
      return initial;
    },
  },
};
</script>

<style lang="scss" scoped>
.chat__box {
  width: 100%;
  max-width: 655px;
  // border: 1px solid red;
  height: auto;
  background: $very-light-grey;
  border-radius: 6px;
  padding: 24px;
  display: grid;
  // margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid: 1fr / max-content auto;
    grid-gap: 24px;
  }
  &--counter {
    grid-row: 2;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      grid-row: 1;
    }
    .reply-mobile {
      display: grid;
      grid: 1fr / repeat(2, max-content);
      align-items: center;
      grid-gap: 5px;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    &-item {
      background: $light-grey;
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: 15px;
      width: max-content;
      padding: 8px;
      border-radius: 8px;
      box-sizing: border-box;
      margin-top: 10px;
      @media screen and (min-width: 768px) {
        flex-direction: column;
        margin-top: 0;
      }
      .count {
        font-size: 16px;
        font-weight: 400;
        color: $moderate-blue;
      }
    }
  }
  &--content {
    &-info {
      display: flex;
      justify-content: space-between;
      .profile-wrapper {
        display: grid;
        grid: 1fr / repeat(3, max-content);
        align-items: center;
        grid-gap: 10px;
      }
      .profile-picture {
        width: 32px;
        height: 32px;
        .image {
          width: 100%;
          height: 100%;
        }
      }
      .reply {
        grid: 1fr / repeat(2, max-content);
        align-items: center;
        grid-gap: 5px;
        display: none;
        border: none;
        cursor: pointer;
        background: transparent;
        color: $moderate-blue;
        @media screen and (min-width: 768px) {
          display: grid;
        }
      }
      .name {
        font-size: 16px;
        color: $dark-blue;
      }
      .period {
        font-size: 16px;
        color: $grayish-blue;
        font-weight: 400;
      }
    }
    &-message {
      margin-top: 10px;
      p {
        color: $grayish-blue;
        font-size: 16px;
        span {
          color: $moderate-blue;
        }
      }
    }
  }
}
</style>

<template>
  <div class="profile">
    <div class="profile-image">
      <img :src="user.image" alt="" />
    </div>
    <p class="username">{{ user.username }}</p>
    <p class="date">{{ user.createdAt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.profile {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 12px;
  &-image {
    width: 34px;
    height: 34px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .username {
    font-size: 16px;
    color: $dark-blue;
    font-weight: 600;
  }
  .date {
    font-size: 16px;
    color: $grayish-blue;
    font-weight: 500;
  }
}
</style>

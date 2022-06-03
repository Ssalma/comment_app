<template>
  <div class="profile">
    <div class="profile-image">
      <img :src="user.image" alt="" />
    </div>
    <p class="username">{{ user.username }}</p>
    <p class="date">{{ formatDate }}</p>
  </div>
</template>

<script>
import formatDistanceToNow from "date-fns/formatDistanceToNow";
export default {
  props: {
    user: {
      type: Object,
    },
  },
  data: () => ({}),
  computed: {
    formatDate() {
      const { date } = this.user;
      if (!date) return "";
      const distance = formatDistanceToNow(date, {
        addSuffix: true,
      }).replace("about ", "");
      return `${distance}`;
    },
  },
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

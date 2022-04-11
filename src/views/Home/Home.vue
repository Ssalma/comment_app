<template>
  <div class="home">
    <div class="home__content">
      <chatBox />
    </div>
  </div>
</template>

<script>
import chatBox from "@/components/ChatBox.vue";
// import something from '../../assets/images/'

export default {
  name: "Home",
  components: {
    chatBox,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: $light-grey;
  width: 100%;
  height: 100vh;
  padding: 50px 24px;
  overflow: hidden;
  &__content {
    max-width: 754px;
    padding: 0 12px;
    width: 100%;
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    padding: 50px 0;
    &__content{
    }
  }
}
</style>

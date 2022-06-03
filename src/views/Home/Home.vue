<template>
  <div class="comment__app">
    <div class="comment__app-content">
      <c-message-board />
      <div class="reply">
        <c-reply />
      </div>
    </div>
  </div>
</template>

<script>
import { CReply, CMessageBoard } from "@/components";
export default {
  components: {
    CReply,
    CMessageBoard,
  },
};
</script>

<style lang="scss" scoped>
.comment__app {
  width: 100%;
  min-height: 100vh;
  background: $light-grey;
  &-content {
    display: grid;
    // grid-gap: 20px;
    padding: 20px 15px;
    // border: 1px solid magenta;
    width: 100%;
    margin: auto;
    // background: $white;
  }
  .reply {
    margin-top: 10px;
  }
  @media screen and (min-width: 786px) {
    width: 100%;
    &-content {
      max-width: 730px;
      // border: 1px solid green;
    }
  }
}
</style>

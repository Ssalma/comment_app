<template>
  <div v-for="comment in comment" :key="comment.id">
    <c-message-board />
    <div class="replies">
      <c-replies />
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.replies {
  display: grid;
  justify-self: flex-end;
  grid-gap: 10px;
  border-left: 1px solid rgba(195, 196, 239, 0.6);
  margin: 20px 0;
  padding-left: 12px;
  @media screen and (min-width: 768px) {
    width: 96%;
    padding-left: 40px;
  }
}
</style>

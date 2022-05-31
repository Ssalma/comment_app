<template>
  <div class="comment">
    <textarea
      cols="30"
      rows="5"
      placeholder="Add a comment...."
      class="comment-text-area"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  &-text-area {
    border: 1px solid $moderate-blue;
    border-radius: 6px;
    width: 100%;
    font-family: Rubik;
    padding: 10px;
    color: $dark-blue;
    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 786px) {
    &-text-area {
    }
  }
}
</style>

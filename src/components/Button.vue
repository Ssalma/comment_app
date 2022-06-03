<template>
  <button
    :class="['btn', variant ? `btn--${variant}` : '']"
    @click="handleClick"
    :disabled="disabled || loading"
    :type="submit ? 'submit' : 'button'"
  >
    <span class="icons">
      <img src="../assets/images/icon-reply.svg" v-if="reply" alt="reply" />
      <img
        src="../assets/images/icon-delete.svg"
        v-if="deleteIcon"
        alt="deleteIcon"
      />
      <img src="../assets/images/icon-edit.svg" v-if="edit" alt="editIcon" />
    </span>
    <slot></slot>
    <span class="btn__loader" v-if="loading" />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    submit: {
      type: String,
    },
    variant: {
      type: String,
      default: "primary",
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    reply: {
      type: Boolean,
    },
    deleteIcon: {
      type: Boolean,
    },
    edit: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "button",
    },
  },
  methods: {
    handleClick() {
      this.$emit("press");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
  color: $white;
  border: none;
  border-radius: 4px;
  background: $moderate-blue;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5;
  cursor: pointer;
  &:hover {
    background: $light-grayish-blue;
  }
  &--secondary {
    background: transparent;
    color: $moderate-blue;
    font-weight: 600;
  }
  .icons {
    img {
      margin-right: 4px;
    }
  }
  &__loader {
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    &::after {
      content: " ";
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      box-sizing: content-box;
      backface-visibility: hidden;
      border-radius: 50%;
      border: 0.2rem solid currentColor;
      border-left-color: transparent;
      animation: ld-spin 500ms infinite linear;
      transform-origin: 50% 50%;
      transform-box: fill-box;
    }
  }
}
@keyframes ld-spin {
  0% {
    animation-timing-function: cubic-bezier(0.5856, 0.0703, 0.4143, 0.9297);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

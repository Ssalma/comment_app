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
}
</style>

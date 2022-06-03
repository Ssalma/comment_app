<template>
  <div class="modal" v-if="show">
    <div class="modal__content">
      <p class="title">Delete Comment</p>
      <p class="description">
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone
      </p>
      <div class="btns--wrapper">
        <button class="cancel--btn" @click="handleCancel">NO, CANCEL</button>
        <button class="delete--btn" @click="handleRemove">YES, DELETE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    handleCancel() {
      return this.$emit("cancel");
    },
    handleRemove() {
      return this.$emit("remove");
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal__content {
    width: 100%;
    max-width: 380px;
    background: $white;
    border-radius: 5px;
    padding: 20px;
    display: grid;
    .title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      color: $dark-blue;
    }
    .description {
      color: $grayish-blue;
      font-size: 16px;
      margin-bottom: 20px;
    }
    .btns--wrapper {
      display: grid;
      grid: 1fr / repeat(2, 1fr);
      grid-gap: 20px;
      margin-top: 10px;
    }
    .cancel--btn {
      border: none;
      background-color: $grayish-blue;
      color: $white;
      font-size: 18px;
      font-weight: 400;
      border-radius: 6px;
      padding: 15px 20px;
      cursor: pointer;
    }
    .delete--btn {
      border: none;
      background-color: $soft-red;
      color: $white;
      font-size: 18px;
      font-weight: 400;
      border-radius: 6px;
      padding: 15px 20px;
      cursor: pointer;
    }
  }
}
</style>
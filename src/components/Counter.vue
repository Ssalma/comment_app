<template>
  <div :class="['counter', type ? `counter--${type}` : '']">
    <button>
      <img src="@/assets/images/icon-plus.svg" alt="" @click="addOne" />
    </button>
    <p class="counter__val">{{ state.count }}</p>
    <button>
      <img src="@/assets/images/icon-minus.svg" alt="" @click="subtractOne" />
    </button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  data: () => ({
    type: "vertical",
  }),
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const state = reactive({
      count: ref(props.count),
    });
    const addOne = () => {
      state.count += 1;
    };
    const subtractOne = () => {
      state.count -= 1;
    };
    return { state, addOne, subtractOne };
  },
};
</script>

<style lang="scss" scoped>
.counter {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-between;
  align-items: center;
  grid-gap: 8px;
  background: $light-grey;
  padding: 5px 10px;
  border-radius: 4px;
  &__val {
    font-size: 16px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    min-width: 40px;
  }
}
</style>

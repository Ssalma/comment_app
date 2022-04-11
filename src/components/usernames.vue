<template>
  <ul name="" id="">
    <li v-for="name in names" :key="name">{{ name }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  height: 5rem;
  width: 20%;
  // border: 1px solid red;
  list-style-type: none;
  background: $very-light-grey;
  border-radius: 8px;
  padding: 10px;
  position: absolute;
  top: -3rem;
  left: 5rem;
}
li {
  font-size: 16px;
  font-weight: 400;
  color: $moderate-blue;
  cursor: pointer;
  margin-bottom: 5px;
}
</style>

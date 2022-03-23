<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  color: #ffffff;
  background: #a74b11;
  padding: 10px 20px 10px 20px;

  font-family: montserrat;
  font-weight: 600;
  font-size: 13px;
  border-radius: 2px;
  border: none;
}

button:disabled {
  background-color: grey;
}
</style>

<script>
export default {
  data() {
    return {};
  },
};
</script>

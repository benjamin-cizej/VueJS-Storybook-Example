<template>
  <label :for="forId">{{ text }}</label>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    forId: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
  label {
    height: auto;
    font-size: 1rem;
    cursor: text;
  }
</style>
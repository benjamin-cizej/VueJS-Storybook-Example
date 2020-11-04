<template>
  <div class="error">{{ message }}</div>
</template>

<script>
  export default {
    name: 'InputError',
    props: {
      message: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style scoped>
  .error {
    color: #F44336;
    font-size: 0.8rem;
  }
</style>
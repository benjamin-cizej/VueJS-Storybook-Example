<template>
  <input
    type="text"
    v-model="internalValue"
    :id="id"
    :name="name"
    :readonly="readonly"
    :disabled="disabled"
    v-on="$listeners"
  >
</template>

<script>
  export default {
    name: "InputText",
    props: {
      value: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: null,
      },
      name: {
        type: String,
        default: null,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        internalValue: this.value,
      };
    },
    watch: {
      value(val) {
        this.internalValue = val;
      }
    }
  }
</script>

<style scoped>
input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--gray);
  border-radius: 0;
  outline: none;
  height: 2rem;
  width: 100%;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: all 0.3s;
  line-height: normal;

  &:focus {
    border-bottom: 1px solid var(--light-blue);
    box-shadow: 0 1px 0 0 var(--light-blue);
  }

  &[readonly] {
    cursor: default;

    &:focus {
      border-bottom: 1px solid var(--gray);
      box-shadow: none;
    }
  }

  &[disabled] {
    color: rgba(0, 0, 0, 0.7);
    border-bottom: 1px dotted rgba(0, 0, 0, 0.42);
  }
}
</style>
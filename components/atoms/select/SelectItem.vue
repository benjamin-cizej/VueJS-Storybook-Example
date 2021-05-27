<template>
  <li
    :class="[
      'item',
      {'item--selected': selected},
    ]"
    @click="$emit('input', {
      value: value,
      text: text,
    })"
    :disabled="disabled"
  >
    <span class="item__text">{{ text }}</span>
  </li>
</template>

<script>
  export default {
    name: 'SelectItem',
    props: {
      value: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      selected: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style scoped>
  .item {
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    min-height: 30px;
    line-height: 1.2rem;
    width: 100%;
    text-align: left;
    text-transform: none;
    list-style-type: none;

    &[disabled] {
      color: rgba(0, 0, 0, 0.3);
      background-color: transparent;
      pointer-events: none;

      & span {
        color: rgba(0, 0, 0, 0.3);
        background-color: transparent;
      }
    }

    &--selected {
      background-color: rgba(0, 0, 0, 0.03);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
    }

    &__text {
      font-size: 16px;
      color: #00bcd4;
      display: block;
      line-height: 22px;
      padding: 10px 16px;
    }
  }
</style>
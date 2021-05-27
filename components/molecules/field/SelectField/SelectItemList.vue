<template>
  <ul>
    <select-item
      v-for="(item, index) in items"
      :value="item.value"
      :text="item.text"
      :disabled="item.disabled"
      :selected="selectedValue === item.value"
      :key="index"
      @input="$emit('input', $event)"
    />
  </ul>
</template>

<script>
import SelectItem from '@materialize/components/atoms/select/SelectItem';

export default {
  name: 'SelectItemList',
  components: {
    SelectItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    selectedValue: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  ul {
    background-color: #fff;
    margin: 0;
    max-height: 650px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    list-style-type: none;
    overflow: hidden;
  }
</style>
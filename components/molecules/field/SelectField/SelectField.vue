<template>
  <div class="select">
    <div
      class="select__field"
      @click="onClick"
      ref="select-field"
    >
      <text-field
        :readonly="true"
        :value="placeholderInternal"
        :label="label"
        :disabled="disabled"
        :suffix="suffix"
        :error="errorInternal"
      />
      <div class="select__caret">
        <icon-caret />
      </div>
    </div>
    <div
      class="select__dropdown"
      v-if="dropdownOpen"
      ref="select-dropdown"
    >
      <select-item-list
        :selected-value="selectedValueInternal"
        :items="items"
        @input="onItemSelect"
      />
    </div>
  </div>
</template>

<script>
  import TextField from '@materialize/components/molecules/field/TextField/TextField';
  import IconCaret from '@materialize/components/atoms/icon/IconCaret';
  import SelectItemList from '@materialize/components/molecules/field/SelectField/SelectItemList';

  export default {
    name: 'SelectField',
    components: {
      SelectItemList,
      IconCaret,
      TextField,
    },
    props: {
      label: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
      selectedValue: {
        type: String,
        required: true,
      },
      suffix: {
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
      error: {
        type: String,
        default: '',
      },
    },
    created() {
      document.body.addEventListener('click', this.documentClickEvent);
    },
    destroyed() {
      document.body.removeEventListener('click', this.documentClickEvent);
    },
    data() {
      return {
        placeholderInternal: this.placeholder,
        selectedValueInternal: this.selectedValue,
        errorInternal: this.error,
        dropdownOpen: false,
      };
    },
    watch: {
      placeholder(value) {
        if (!this.selectedValue) {
          this.placeholderInternal = value;
        }
      },
      selectedValue(value) {
        this.selectedValueInternal = value;
        if (!value) {
          this.placeholderInternal = this.placeholder;
        } else {
          this.items.forEach((item) => {
            if (item.value === value) {
              this.placeholderInternal = item.text;
              return false;
            }
          });
        }
      },
      error(value) {
        this.errorInternal = value;
      },
    },
    methods: {
      documentClickEvent(event) {
        if (
          !event.path.includes(this.$refs['select-dropdown']) &&
          !event.path.includes(this.$refs['select-field'])
        ) {
          this.dropdownOpen = false;
        }
      },
      onItemSelect(val) {
        this.placeholderInternal = val.text;
        this.selectedValueInternal = val.value;
        this.errorInternal = '';
        this.dropdownOpen = false;
      },
      onClick() {
        if (!this.disabled) {
          this.dropdownOpen = true;
        }
      },
    },
  };
</script>

<style scoped>
  .select {

    &__field {
      position: relative;

      ::v-deep input {
        cursor: pointer;
      }
    }

    &__caret {
      position: absolute;
      right: 0;
      top: 10px;
      cursor: pointer;
    }
  }
</style>
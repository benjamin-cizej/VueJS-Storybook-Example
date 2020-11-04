<template>
  <div class="field">
    <input-text
      :class="[
        'field__input',
         {'field__input--error': error},
      ]"
      :id="id"
      v-model="internalValue"
      :readonly="readonly"
      :disabled="disabled"
      @input="$emit('input', $event)"
      @focusin="onFocusIn"
      @focusout="onFocusOut"
    />
    <input-label
      :class="[
        'field__label',
        {
          'field__label--active': active,
          'field__label--focus': focusElement && !error,
          'field__label--error': error,
        },
      ]"
      :for-id="id"
      :text="label"
    />
    <span
      v-if="suffix"
      class="field__suffix"
    >{{ suffix }}</span>
    <input-error
      class="field__error"
      v-if="error"
      :message="error"
    />
  </div>
</template>

<script>
  import InputText from '@materialize/components/atoms/input/InputText/InputText';
  import InputLabel from '@materialize/components/atoms/input/InputLabel/InputLabel';
  import InputError from '@materialize/components/atoms/input/InputError/InputError';

  export default {
    name: 'TextField',
    components: {
      InputError,
      InputLabel,
      InputText
    },
    props: {
      id: {
        type: String,
        default: null,
      },
      value: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
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
        default: null,
      },
    },
    data() {
      return {
        internalValue: this.value,
        focus: false,
      };
    },
    computed: {
      active() {
        return this.internalValue !== '' || (!this.readonly && this.focus);
      },
      focusElement() {
        return this.focus && !this.readonly;
      }
    },
    watch: {
      value(val) {
        this.internalValue = val;
      },
      internalValue() {
        this.error = null;
      }
    },
    methods: {
      onFocusIn() {
        this.focus = true;
      },
      onFocusOut() {
        this.focus = false;
      },
    },
  };
</script>

<style scoped>
  .field {
    position: relative;

    &__input {

      &--error {
        border-bottom: 1px solid var(--red) !important;
        box-shadow: 0 1px 0 0 var(--red) !important;
      }
    }

    &__label {
      left: 0;
      position: absolute;
      top: 5px;
      height: 100%;
      cursor: text;
      transition: transform .2s ease-out;
      transform-origin: 0 100%;
      transform: translateY(5px);
      pointer-events: none;

      &::after {
        display: block;
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        opacity: 0;
        transition: .2s opacity ease-out, .2s color ease-out;
      }

      &--active {
        transform: translateY(-14px) scale(0.8);
        transform-origin: 0 0;
      }

      &--focus {
        color: var(--light-blue);
      }

      &--error {
        color: var(--red);
      }
    }

    &__suffix {
      position: absolute;
      top: 10px;
      right: 0;
    }

    &__error {
      padding-top: 10px;
    }
  }
</style>
<template>
  <div class="field">
    <input-text
      :type="type"
      :class="[
        'field__input',
         {'field__input--error': internalError},
      ]"
      :id="id"
      v-model="internalValue"
      :readonly="readonly"
      :disabled="disabled"
      @focusin="onFocusIn"
      @focusout="onFocusOut"
    />
    <input-label
      :class="[
        'field__label',
        {
          'field__label--active': active,
          'field__label--focus': focusElement && !internalError,
          'field__label--error': internalError,
        },
      ]"
      :for-id="id"
      :text="label"
    />
    <span
      v-if="suffix"
      :class="[
        'field__suffix',
        `field__suffix--${type}`,
      ]"
    >{{ suffix }}</span>
    <input-error
      class="field__error"
      v-if="internalError"
      :message="internalError"
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
      type: {
        type: String,
        default: 'text',
      },
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
        internalError: this.error,
        focus: false,
      };
    },
    computed: {
      active() {
        return this.internalValue !== '' || (!this.readonly && this.focus);
      },
      focusElement() {
        return this.focus && !this.readonly;
      },
    },
    watch: {
      value(val) {
        this.internalValue = val;
      },
      internalValue() {
        this.internalError = '';
      },
      error(val) {
        this.internalError = val;
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

      &--number,
      &--date {
        right: 25px;
      }
    }

    &__error {
      padding-top: 10px;
    }
  }
</style>
import { text, boolean, select } from '@storybook/addon-knobs';
import InputText from './InputText.vue'

export default {
  title: 'Atoms/Input',
};

export const InputTextStory = () => ({
  components: {
    InputText
  },
  props: {
    type: {
      default: select('Type', [
        'text',
        'number',
        'email',
        'tel',
        'password',
      ], 'text'),
    },
    input: {
      default: text('Input text', ''),
    },
    readonly: {
      default: boolean('Readonly', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
  },
  template: `
    <InputText
      :type="type"
      :value="input"
      :readonly="readonly"
      :disabled="disabled"
    />`,
});

InputTextStory.storyName = 'Text input';

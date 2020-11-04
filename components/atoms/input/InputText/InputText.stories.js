import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import InputText from './InputText.vue'

export default {
  title: 'Atoms/Input',
};

export const InputTextStory = () => ({
  components: {
    InputText
  },
  props: {
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
  template: `<InputText :value="input" :readonly="readonly" :disabled="disabled" />`,
});

InputTextStory.storyName = 'Text input';

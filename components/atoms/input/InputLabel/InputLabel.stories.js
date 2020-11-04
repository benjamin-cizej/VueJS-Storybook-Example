import { withKnobs, text } from '@storybook/addon-knobs';
import InputLabel from './InputLabel.vue';

export default {
  title: 'Atoms/Input',
  decorators: [
    withKnobs,
  ]
};

export const InputLabelStory = () => ({
  components: {
    InputLabel,
  },
  props: {
    text: {
      default: text('Label', 'Test'),
    }
  },
  template: `
    <input-label :text="text" />
  `,
});

InputLabelStory.storyName = 'Input label';
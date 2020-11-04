import { withKnobs, text } from '@storybook/addon-knobs';
import InputError from './InputError';

export default {
  title: 'Atoms/Input',
  decorators: [
    withKnobs,
  ]
};

export const InputErrorStory = () => ({
  components: {
    InputError,
  },
  props: {
    message: {
      default: text('Message', 'This is an error message'),
    },
  },
  template: `
    <input-error :message="message" />
  `,
});

InputErrorStory.storyName = 'Input error';
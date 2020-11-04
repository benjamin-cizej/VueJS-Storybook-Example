import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import TextField from './TextField';

export default {
  title: 'Molecules/Field',
};

export const TextFieldStory = () => ({
  components: {
    TextField,
  },
  props: {
    value: {
      default: text('Input', ''),
    },
    label: {
      default: text('Label', 'Test Label'),
    },
    suffix: {
      default: text('Suffix', ''),
    },
    id: {
      default: text('Id', null),
    },
    readonly: {
      default: boolean('Readonly', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    error: {
      default: text('Error message', null),
    }
  },
  template: `
    <text-field
      :value="value"
      :label="label"
      :suffix="suffix"
      :id="id"
      :readonly="readonly"
      :disabled="disabled"
      :error="error"
    />
  `,
});

TextFieldStory.storyName = 'Text field';
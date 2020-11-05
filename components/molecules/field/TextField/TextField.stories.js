import { text, boolean, select } from '@storybook/addon-knobs';
import TextField from './TextField';

export default {
  title: 'Molecules/Field',
};

export const TextFieldStory = () => ({
  components: {
    TextField,
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
      default: text('Id', ''),
    },
    readonly: {
      default: boolean('Readonly', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    error: {
      default: text('Error message', ''),
    }
  },
  template: `
    <text-field
      :type="type"
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
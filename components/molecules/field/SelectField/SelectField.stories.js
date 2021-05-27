import SelectField from './SelectField';
import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Molecules/Select',
};

export const SelectFieldStory = () => ({
  components: {
    SelectField,
  },
  props: {
    label: {
      default: text('Label', 'Država'),
    },
    placeholder: {
      default: text('Placeholder', 'Izberite državo'),
    },
    selectedValue: {
      default: select('Selected', {
        'No selection': '',
        'Brez države': '_none',
        'Slovenija': 'SI',
        'Slovakija': 'SK',
      }, ''),
    },
    suffix: {
      default: text('Suffix', ''),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    error: {
      default: text('Error message', ''),
    },
  },
  template: `
    <select-field
      :items="[
        {
          value: '_none',
          text: 'Brez države',
          disabled: false,
        },
        {
          value: 'SI',
          text: 'Slovenija',
          disabled: false,
        },
        {
          value: 'SK',
          text: 'Slovakija',
          disabled: false,
        },
      ]"
      :selected-value="selectedValue"
      :label="label"
      :placeholder="placeholder"
      :error="error"
      :suffix="suffix"
      :disabled="disabled"
    />
  `,
});

SelectFieldStory.storyName = 'Select Field';
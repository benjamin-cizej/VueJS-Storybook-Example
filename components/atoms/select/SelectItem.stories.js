import SelectItem from './SelectItem';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Select',
};

export const SelectItemStory = () => ({
  components: {
    SelectItem,
  },
  props: {
    value: {
      default: text('Value', 'SI'),
    },
    text: {
      default: text('Text', 'Slovenija'),
    },
    selected: {
      default: boolean('Selected', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    }
  },
  template: `
    <select-item
      :value="value"
      :text="text"
      :selected="selected"
      :disabled="disabled"
    />
  `
});

SelectItemStory.storyName = 'Select Item';
import SelectItemList from './SelectItemList';
import { select } from '@storybook/addon-knobs';
import { selectItemListData } from './SelectItemList.data';

export default {
  title: 'Molecules/Select',
};

export const SelectItemListStory = () => ({
  components: {
    SelectItemList,
  },
  props: {
    selectItemListData: {
      default: () => selectItemListData,
    },
    selectedValue: {
      default: select('Selected', {
        'Brez države': '',
        'Slovakija': 'SK',
      }, selectItemListData.selectedValue),
    },
  },
  template: `
    <select-item-list
      :items="selectItemListData.itemList"
      :selected-value="selectedValue"
    />
  `
});

SelectItemListStory.storyName = 'Items List';

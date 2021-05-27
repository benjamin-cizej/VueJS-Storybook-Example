export const selectItemListData = {
  itemList: [
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
  ],
  largeItemList: new Array(20).fill({
    value: 'SI',
    text: 'Slovenija',
    disabled: false,
  }),
  selectedValue: 'SI',
};

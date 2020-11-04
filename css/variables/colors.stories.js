export default {
  title: 'Common Styles/Common Styles',
};

export const Colors = () => ({
  data: () => ({
    colors: [
      {
        variable: '--light-blue',
        color: '#00bcd4',
      },
      {
        variable: '--red',
        color: '#f44336',
      },
      {
        variable: '--gray',
        color: '#9e9e9e',
      },
      {
        variable: '--light-black',
        color: '#2d2d2d',
      },
    ],
  }),
  template: `
    <div>
      <div
        v-for="color in colors"
        :style="{background: color.color, color: 'white', fontWeight: 700,  padding: ['20px', '40px'], marginTop: '10px'}"
      >
        {{ color.variable }}
      </div>
    </div>
  `,
});

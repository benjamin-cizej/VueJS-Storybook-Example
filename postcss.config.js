module.exports = {
  plugins: {
    'postcss-easy-import': {},
    'postcss-preset-env': {
      stage: 0,
      importFrom: './css/variables/breakpoints.css',
    },
    'postcss-url': {
      url: 'inline',
      maxSize: 20,
      fallback: 'rebase',
      assetsPath: '../assets',
    },
    'postcss-mixins': {
      mixinsDir: './css/mixins'
    },
    'postcss-nested': {},
    'postcss-at-rules-variables': {},
  },
  url: false,
};
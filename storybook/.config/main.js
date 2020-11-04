const webpack = require('../../webpack.config');

module.exports = {
  stories: ['../../**/*.stories.js'],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpack.resolve.alias,
    }

    return config;
  },
};
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@materialize': path.resolve(__dirname),
    },
  },
};

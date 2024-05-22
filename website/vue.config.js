const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@website': path.resolve(__dirname, 'website')
      }
    }
  }
};
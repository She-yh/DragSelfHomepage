const webpack = require('webpack');

module.exports = {
    publicPath: './',
    devServer: {
        // 项目运行时候的端口号
        port: 4000
    },
    chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  }
};
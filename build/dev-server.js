const webpackConfig = require('./webpack.config')
const webpack = require('webpack')

var compiler = webpack(webpackConfig, function() {
  console.log('webpack done');
});

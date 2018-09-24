const express = require('express')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')

var app = express();
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

app.use(devMiddleware);

const port = 3000
const uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

var server = app.listen(port);

module.export = {
  close: () => {
    server.close();
  }
}

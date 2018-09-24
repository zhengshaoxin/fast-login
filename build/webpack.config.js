var config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js', // 程序入口文件
  output: {
    path: config.dev.assetsRoot, // 打包后的文件存放的路径
    filename: "app.js" // 打包后输出文件的文件名 [name].js 则与入口文件一样
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js' // 默认 NPM 包导出的是 运行时 构建
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}

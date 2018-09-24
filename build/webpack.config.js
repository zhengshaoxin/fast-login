module.exports = {
  entry: "/Users/xin/Work/Web/fast-login/src/main.js", // 程序入口文件
  output: {
    path: "/Users/xin/Work/Web/fast-login/dist", // 打包后的文件存放的路径
    filename: "app.js" // 打包后输出文件的文件名
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
  }
}

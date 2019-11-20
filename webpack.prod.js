const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  // 出口
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Minification 插件
    new UglifyJSPlugin(),
    // 一些 library 可能针对具体用户的环境进行代码优化
    // 从而删除或添加一些重要代码
    // 我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量：
    // 任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  // 出口
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 开发工具： SourceMap
  devtool: 'inline-source-map',
  // 告诉开发服务器(dev server)，在哪里查找文件
  // webpack-dev-server 为你提供了一个简单的 web 服务器 , 实时重新加载(live reloading) 
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    // clientLogLevel: 'none',
    port: 3000,
    hotOnly: true
  }
})
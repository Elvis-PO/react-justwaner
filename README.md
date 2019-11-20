# 🏁	🏎 ☁️ ☁️ 昀锦どうふ店（自家用)

![“头文字D”的图片搜索结果](http://p3-tt.bytecdn.cn/large/411001a8324fad0d015)

## 一、闲扯

### 讲讲前提吧 ～ 制作此游戏的一个很重要的目的：将工作收获得以积累、应用、升华

### So ～ 使用`React`系列技术栈开发

### So ～ 一些JS库可能 “大材小用” 



## 二、需要用到一些JS库

### 🌟`webpack`相关、`babel`相关 【实战目的】

####    Emm......不从零开撸、算什么男人

### 🌟`Redux`【实战目的】

####    Emm......游戏需要大量状态管理

### 🌟`React Router`【实战目的】

####    Emm......可能 🏎改装商店需要它

### 🌟`lodash`、`moment`、`decimal.js`

#### 	解决原生痛点～赛车游戏嘛避免不了时间、速度等计算




## 三、模型规划

### 🏎 头、尾：

#### 	形状、颜色

### 🏎 马力：

#### 	引擎、排气、涡轮

### 🏎 车手：

#### 	金币、驾照

### 🏎 赛道：

#### 	跑道、边界


## 四、开搞

### `git`、`yarn` - 初始化

```bash
git init
yarn init
```

配置.gitignore
```
/node_modules

yarn.lock
```

### 需要一个打包器

```bash
yarn add -D webpack
            webpack-cli
            webpack-merge
            webpack-dev-server
            html-webpack-plugin
            clean-webpack-plugin
            babel-loader
            css-loader
            less-loader
            style-loade
yarn add less --peer
```

配置打包器：
webpack.common.js
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        app: './src/index.js'
    },
    // loader
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs'
        }),
    ]
};
```
webpack.dev.js
```javascript
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

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
});
```
webpack.prod.js
```javascript
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
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
});
```

### 需要一个编译器

```bash
yarn add -D @babel/cli
            @babel/core
            @babel/preset-env
            @babel/preset-react
```

配置.babelrc
```
{
    "presets": [
        "@babel/env",
        "@babel/preset-react"
    ]
}
```

### 本尊及护法

```bash
yarn add react react-dom react-router redux
```

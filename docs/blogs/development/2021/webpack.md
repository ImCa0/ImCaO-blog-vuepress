---
title: Webpack 核心概念
date: 2021-10-14
tags:
  - Webpack
categories:
  - 开发
abs_img: /img/2021/webpack_abs.jpg
head_img: /img/2021/webpack_head.jpg
sidebar: auto
---

**本文简述了 webpack 中的一些核心概念，包括基础模块的功能介绍和配置方法。**

## 基础使用

### 使用 webpack 进行打包

#### webpack 的基础功能

- 转换 ES6 规范的代码
- 支持 ES6 模块化
- 压缩代码

#### 安装

```bash
npm init -y

npm install webpack webpack-cli -D
```

#### 基础配置

```js
// ./webpack.config.js
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dict'),
    filename: 'bundle.js',
  },
}
```

- **entry**：入口，指定 webpack 开始打包的文件
- **output**：出口，指定 webpack 输出文件位置及名称

### SourceMap

#### 功能

建立源代码与打包生成的代码之间的映射关系，用于开发时定位错误位置。

#### 配置

```js
// ./webpack.config.js
module.exports = {
  devtool: 'source-map',
}
```

- **devtool**：接收开启 SourceMap 的参数值，具体取值可参见[webpack 官方文档](https://webpack.js.org/configuration/devtool/)

## Plugins

实现开发时的一些小功能。

### html-webpack-plugin

#### 功能

打包时自动创建 html 文件，并引入打包生成的 js 文件。

#### 安装

```bash
npm install html-webpack-plugin -D
```

#### 配置

```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
}
```

- **template**：指定生成 html 文件的模板
- **filename**：指定生成的 html 文件名

### clean-webpack-plugin

#### 功能

打包时自动清理目标文件夹，主要用于删除文件名带哈希值的文件，因为它们不会被新打包生成的文件覆盖。

#### 安装

```bash
npm install clean-webpack-plugin -D
```

#### 配置

```js
// ./webpack.config.js
const { CleanWebpackPlugin } = require('html-webpack-plugin')

module.exports = {
  plugins: [new CleanWebpackPlugin()],
}
```

### webpack-dev-server

#### 功能

开发时使用 webpack-dev-server 命令进行热部署。

#### 安装

```bash
npm install webpack-dev-server -D
```

#### 配置

```json
// ./package.json
{
  "scripts": {
    "dev": "webpack-dev-server"
  }
}
```

```js
// ./webpack.config.js
const path = require('path')

module.exports = {
  devServer: {
    port: 8000,
    static: path.join(__dirname, 'dist'),
  },
}
```

- **port**：指定项目部署端口
- **static**：指定部署项目的静态资源文件夹

## Loader

用于 webpack 打包时，对不同类型文件进行处理。

### file-loader

#### 功能

将文件直接打包到目标文件夹。

#### 安装

```bash
npm install file-loader -D
```

#### 配置

```js
// ./webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
          },
        },
      },
    ],
  },
}
```

- **test**：用正则表达式匹配使用该 loader 的文件名
- **name**：指定打包生成的文件名，[name]指原文件名，[hash]指生成哈希值，[ext]指原文件拓展名

### url-loader

####

将文件转换为 base64 编码，而非生成新文件。

:::warning
对于较大的文件，请使用 file-loader 或配置 **limit** 选项，以避免页面加载时间过长。
:::

#### 安装

```bash
npm install url-loader -D
```

#### 配置

```js
// ./webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048,
          },
        },
      },
    ],
  },
}
```

- **limit**：指定使用 url-loader 打包的文件大小上限，单位为字节，超过上限的文件会自动使用 file-loader 进行打包

### css-loader 和 style-loader

#### 功能

css-loader 用于处理以下 css 文件的引用关系，最终导出一个包含 css 信息的数组。

```js
import './index.css'
```

```css
@import './index.css';
```

style-loader 用于将 css-loader 生成的 css 信息添加到页面 head 标签下的 style 标签中。

#### 安装

```bash
npm install css-loader sytle-loader -D
```

#### 配置

```js
// ./webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        },
      },
    ],
  },
}
```

:::warning
loader 执行顺序由下往上，因此需要将 css-loader 放在 style-loader 下方。
:::

#### 启用 CSS 模块化

启用 CSS 模块化，避免将 css 文件引入为全局样式导致污染。

```js
// ./webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ],
        },
      },
    ],
  },
}
```

```js
// ./index.js
import styles from './index.js'

img.className += ` ${styles.myImg}`
```

### sass-loader 和 postcss-loader

#### 功能

sass-loader 用于将 sass 文件转换为 css 文件以进行下一步的打包。

postcss-loader 用于处理 css 文件，例如给 CSS3 样式添加浏览器厂商前缀。

#### 安装

```bash
npm install sass sass-loader -D

npm install postcss postcss-loader -D
npm install autoprefixer -D
```

#### 配置

```js
// ./webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        },
      },
    ],
  },
}
```

```js
// ./postcss.config.js
module.export = {
  plugins: [require('autoprefixer')],
}
```

```json
// ./package.json
{
  "browserslist": ["> 1%", "last 2 versions"]
}
```

- **browserslist**：兼容市场份额大于 1% 的浏览器的近 2 个版本，为其添加厂商前缀

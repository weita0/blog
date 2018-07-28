# 深入浅出Webpack

## 基本概念

### Entry

```javascript
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js')
}
```

指定入口，webpack将从这里开始构建依赖，一个项目可以有多个入口

### Output

```javascript
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
}
```

指定webpack生成的bundle文件的路径

### Loaders

loaders告诉webpack如何针对不同的文件类型，采取对应的处理方式

大部分loaders需要手动安装，webpack并不内置，譬如用于处理css文件的css-loader，用于处理.ts文件的ts-loader

```sh
npm install -D css-loader ts-loader
```

```javascript
module.exports = {
  module: {
    rules: [
        {
            test: /\.css$/,
            use: 'css-loader'
        },
        {
            test: /\.ts$/,
            use: 'ts-loader'
        }
    ]
  }
}
```

关于loader还需要知道：

#### 1. loader可以是链式调用的，顺序是**从右向左**的

```javascript
module.exports = {
  rules: [
    {
      test: /\.(css|scss)$/,
      use: [
        "style-loader", // create style nodes from JS string
        "css-loader", // Css into CommonJS
        "sass-loader" // Sass to css
      ]
    }
  ]
}
```

出于加载速度考虑，生产环境下不应该把css放在index.html的header里，利用**MiniCssExtractPlugin**这个插件把CSS拎出来放在一个单独的文件里，这样样式的加载就不会依赖于JS了

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  rules: [
    {
      test: /\.(css|scss)$/,
      use: [
        process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
        "css-loader", // Css into CommonJS
        "sass-loader" // Sass to css
      ]
    }
  ]
}
```

#### 2. loader可以是异步或者同步的

#### 3. loader被node调用，几乎可以做任何事

#### 4. loader可以通过options对象被配置

#### 5. Plugin比loader功能更强大

loader的本质：

通常来说，loader跟标准的node_modules模块没什么两样，一样通过npm install安装并且放在node_modules目录下

一个loader模块应该export一个function

也可以自己写一个loader，以文件形式保存，通常命名为xxx-loader，具体请参照这篇文档

[Writing a Loader](https://webpack.js.org/contribute/writing-a-loader/)

### Plugins

#### 什么是Plugin

webpack插件本质上是一个JavaScript对象，这个对象有一个apply方法，webpack在执行时会调用这个方法，有很多有用的Plugin，会另起一篇文章来逐一介绍

### Mode

值可以为：none, develpment, production(default)

webpack会根据不同的mode去调用内置的优化

可以在命令行中指定而不出现在配置文件中，像这样：

```sh
webpack --mode=prodction
```

当值为develpment时，打开NamedChunksPlugin, NamedModulesPlugin

当值为production时，打开FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin, UglifyJsPlugin

需要注意的是：**仅仅设置了NODE_ENV并不等于设置了mode**

## Q&A

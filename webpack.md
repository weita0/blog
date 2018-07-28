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

### Plugins

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

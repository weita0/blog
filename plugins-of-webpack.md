# Plugin大起底

## SplitChunksPlugin

intro

把公用模块抽离出来放在单独的文件里(也被称作chunk)，通常来说这些文件可以缓存在浏览器里，只用首次加载，性能优化常用的手段之一

webpack利用这个插件来管理分离的代码块之间的依赖关系

webpack会根据下面几个原则来决定是否分离代码：

- 可以被共享
- 体积超过30kb
- 代码块被加载时的请求数量保持少于等于5个
- 初始页面加载时请求数少于等于3个

```javascript
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/node_modules[\\/]]/,
          priority: -10
        },
        default: {
            minChunks: 2,
            priority: -20,
            resuseExistingChunk: true
        }
      }
    }
  }
}
```

## HtmlWebpackPlugin

intro

替你创建包含所有依赖项的**index.html**，如果你生成的文件名中包含hash，你就不用每次build之后去手动修改script标签里的src值了

install

```sh
npm install -S html-webpack-plugin
```

usage

| option | default | desc |
| :----- | :------ | :--- |
| title | Webpack App | title |
| filename | index.html | filename |
| template | none | template |
| inject | true | 当值为true或body时，会把所有的js资源全部放在body底部，当值为head时，会放在header里 |
| hash | false | 当值设为true时会在所有js、css资源的文件名后加一串hash，做资源缓存时会有用 |

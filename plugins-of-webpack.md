# Plugin大起底

## SplitChunksPlugin

intro

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

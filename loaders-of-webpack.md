# Loaders大起底

## babel-loader

install

```sh
npm install babel-loader babel-core babel-preset-env
```

use

```javascript
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [],
      babelrc: true // default true, if false, .babelrc file will be ignored,
      cacheDirectory: true // default false
    }
  }
}
```

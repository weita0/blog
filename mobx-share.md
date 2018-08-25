# MobX 分享

## Preparation

### Install

npm install mobx --save
npm install mobx-react --save

### Babel plugins

- babel-plugin-transform-class-properties
- babel-plugin-transform-decorators
- babel-plugin-transform-react-jsx

```javascript
rules: [
  test: /\.(js|jsx)$/,
  use: {
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-proposal-decorators', {'legacy': true}],
        ['transform-class-properties'],
        ['transform-react-jsx']
      ]
    }
  }
]
```

## Introduction

### Version

MobX >= 5

any browser with ES6 proxy support. IE11 not supported

MobX 4

any ES5 browser, api's are the same, but has some limitations

### Philosophy

Anything that can be derived from the application state, should be derived. **Automatically**

## Core Conceptions

### State(状态)

驱动应用的数据

### Derivation(衍生)

任何**源自**状态且不会有任何进一步相互作用的东西，都是衍生，它们可以是

- UI
- Derived Data(衍生数据)
- Backend Integrations(后端集成)

MobX把这些衍生分为两种：

1. Computed values 使用纯函数从当前可观察状态中衍生出的值

2. Reaction 当状态改变时需要**自动**发生的副作用

### Action

任何一段改变状态的代码

![uni-directional data flow](https://mobx.js.org/images/action-state-view.png)

![flow graph](https://mobx.js.org/docs/flow.png)

![another fg](https://mobx.js.org/getting-started-assets/overview.png)

## API

### observable

```javascript
import { observable } from 'mobx'

class Todo {
  id: Math.random()
  @observable title = ''
  @observable finished = false
}
```

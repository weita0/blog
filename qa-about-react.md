# 开发React的过程中遇到的疑问，以及答案

## 1. The distinction between function and class components in React

函数的方式定义React组件：
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

类的方式定义React组件：
```javascript
class Welcome extends React.Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

两种方式有哪些区别?

先来看一下Babel编译后的代码

函数方式：

```javascript
function Welcome(props) {
  return _react2.default.createElement(
    'h1',
    null,
    'Hello, ',
    props.name
  )
}
```

继承的方式：

```javascript
var Welcome = function (_React$Component) {
  _inherits(Welcome, _React$Component);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  _createClass(Welcome, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Hello, ',
        props.name
      );
    }
  }]);

  return Welcome;
}(_react2.default.Component);
```
用法上的区别:

函数定义的组件，没有state，不能setState(因此也被称为stateless components，无状态组件)，也没有React提供的生命周期方法

函数定义组件的好处：

1. 易于阅读和测试

2. 写法简洁

3. 帮助你区分presentational components和container

4. 性能上更优


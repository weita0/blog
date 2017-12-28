# Generator(掰扯掰扯JavaScript中的生成器函数)

### Intro: Generator, 顾名思义, 就是生产者、发电机, 在Javascript中是一种函数 —— Generator函数(这不废话么...), 即生成遍历器的函数, Generator 函数和普通函数的区别, 先说语法上的. Generator 函数长这样:
```javascript
function* example () {
  yield 'happy'
  yield 'sad'
  yield 'who cares'
}
```

看出来没, Generator和普通函数的不同之处就在于关键字**function**后面的「*」, 和一个新的关键字「yield」, 所以只要看到function后面跟了个「*」, 那就是Generator函数无疑了

但是这货到底有啥用(为什么一定要有用呢)？

1. 把对象变成可遍历的
我们知道for...of可以用于遍历数组(我就不知道)...闭嘴, 不知道你好意思说你会JS? 嗯... 
for...of可以遍历数组, 但是不能遍历对象, 因为原生对象没有自带Iterator(就是迭代器嘛, 整那么高大上干啥), 下面请看怎样用Generator给对象加上Iterator:
```javascript
const obj = { fst_name: 'Weitao', lst_name: 'Wang' }
obj[Symbol.iterator] = function* () {
  let keys = Object.keys(this)
  for(let k of keys) {
    yield [k, this[k]]
  }
}
for(let kv of obj) {
  let [key, val] = kv
  console.log(`${key}: ${val}`)
}
// fst_name: Weitao
// lst_name: Wang
```
Poof! Boom! 是不是很牛掰? (明明可以用for...in来遍历对象, 为啥要费这么大劲, 难道就为装个逼?) 嗯...是个好问题...答案暂且不表, 且听下回分解(别忽悠啊, 其实你是不知道吧)

2. 用来写斐波那契数列生成函数
```javascript
function* fab() {
  let [prev, curr] = [0, 1]
  while(true) {
    [prev, curr] = [curr, curr + prev]
    yield curr
  }
}
for(let val of fab()) {
  console.log(val) // 1, 2, 3, 5, 8...
}
```
(这...这...这也太大材小用了吧)没错...这就是帮你理解Generator函数的工作方式的, 重头戏还在后面(能不能赶紧进入重点啊)




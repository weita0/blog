# Stream in Node

Stream 是用于处理流数据的抽象接口. HTTP request和process.stdout就是流实例

### 流分类

| name | type | example |
| ---- | ---- | ------- |
| Readable | 可读流 | fs.createReadStream() |
| Writable | 可写流 | fs.createWriteStream() |
| Duplex | 可读写流 | net.Socket |
| Transform | 读写过程中可以修改和变换数据的Duplex流 | zlib.createDeflate |


### Writable stream
可写流包含 
- 客户端的HTTP request
- 服务器端的HTTP response
- fs write stream
- zlib/crypto/TCP stream
- child process stdin 
- process.stdout, process.stderr

可写流最常用的方法：

**write**和**end**方法均可以将数据写入流中

writable.end([chunk][, encoding][, callback])

调用end()表明接下来没有数据要被写入Writable, 通过传入chunk可以在关闭流之前再写入一段数据, callback将作为'finish'实践的回调函数

writable.write(chunk[, encoding][, callback])

### Readable stream
可读流包含 
- HTTP response on the client
- HTTP request on the server
- fs read stream
- zlib/crypto streams
- TCP sockets
- child process stdout and stderr
- process.stdin

可读流的两种模式：
- flowing 模式
- paused 模式

flowing 模式下，可读流自动从系统底层读取数据
paused 模式下，必须显示调用stream.read()方法来从流中读取数据片段

从paused模式切换到flowing模式的方法：

- 监听'data'事件
- 调用stream.resume()方法
- 调用stream.pipe()方法将数据发送到Writable stream

从flowing 切换到 paused模式：

- 调用stream.pause()方法
- 取消'data'监听，并调用stream.unpipe()

Readable stream的常用方法：

readable.pipe(destination[, options])

绑定一个writable到readable商，将可写流自动切换到flowing模式，将所有数据传给绑定的writable，数据流将被自动管理

options:
  end 在reader结束时写入，默认true







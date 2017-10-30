# Stream in Node

Stream 是用于处理流数据的抽象接口. HTTP request和process.stdout就是流实例

### 流分类

| name | type | example |
| ---- | ---- | ------- |
| Readable | 可读流 | fs.createReadStream() |
| Writable | 可写流 | fs.createWriteStream() |
| Duplex | 可读写流 | net.Socket |
| Transform | 读写过程中可以修改和变换数据的Duplex流 | zlib.createDeflate |

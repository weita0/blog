# Process in Node

全局变量,无需require

## API intruducing

### process.stdin
process.stdin会返回一个连接到stdin的Readable stream

### process.stdout
process.stdout会返回一个连接到stdout的Writable stream

### process.stderr

process I/O 和 Node.js stream 区别?
1. 不能被closed
2. 不会触发finish事件
3. 不同平台,写入可能是同步也可能是异步的
  1. files: Windows 同步, POSIX 同步
  2. TTYs: Windows 异步, POSIX 同步
  3. Pipes: Windows 同步, POSIX 移步


### process.version & process.versions
proceess.version返回node版本  
> 'v8.4.0'

process.versions返回一个对象
```javascript
{
  http_parser: '2.7.0',
  node: '8.4.0',
  v8: '',
  uv: '',
  zlib: '',
  ares: '',
  modules: '' // 后面几个省略
}
```

### process.argv
以数组形式返回进程启动时传入的参数
first argv: process.execPath
second argv: path to the js file being executed
remainging: additional command line arguments

### process.argv0

### process.umask()

### process.uptime()
当前node进程运行的时间

### process.pid
进程PID

### process.platform
system platform: 'darwin', 'freddbsd', 'linux', ''sunos', 'win32'...

### process.send(message)
用于给父进程发送消息

### process.exit()
结束进程, exitCode默认为0 

### process.execPath
返回启动此node进程的绝对路径

### process.cwd()
current working directory

### Exit Codes
| Code | 含义 |
| ---- | ---- |
| 1 | Uncaught Fatal Exception |
| 2 | Unused |
| 3 | Internal JS Parser Error |
| 4 | Internal JS Evaluation Failure |
| 5 | Fatal Error |
| 6 | Non-function Internal Exception Handler |
| 7 | Internal Exception Handler Run-Time Failure |
| 8 | Unused | 
| 9 | Invalid Argument |
| 10 | Internal JavaScript Run-Time Failure |
| 12 |  Invalid Debug Argument |
| >128 | Signal Exits |



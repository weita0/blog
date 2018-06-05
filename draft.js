const os = require('os')
const fs = require('fs')
const stream = require('stream')
const tty = require('tty')
const net = require('net')

const server = net.createServer(socket => {
  socket.end('goodbye \n')
}).on('error', err => {
  throw err
})

server.listen(() => {
  console.log('opened server on', server.address().port)
})

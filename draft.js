const os = require('os')
const fs = require('fs')
const stream = require('stream')


let reader = process.stdin
let writer = fs.createWriteStream('./wratable.md')
reader.on('data', chunk => {
  writer.write(chunk)
  reader.pause()
})
reader.on('end', () => {
  console.log('finish')
})

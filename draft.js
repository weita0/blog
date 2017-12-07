// const buf = Buffer.alloc(10, 10)
// process.stdin.on('data', chunk => {
//   try {
//     const idx = parseInt(chunk) 
//     if (idx) {
//       console.log(buf[idx])
//     } else {
//       throw new WrongInputError('Wrong Input')
//     }
//   } catch (e) {
//     console.log(e.name)
//     console.log(e.message)    
//     process.exit()
//   }
  
// })

// function WrongInputError(msg) {
//   this.message = msg 
//   this.name = 'WrongInput'
// }
// WrongInputError.prototype.toString = function () {
//   return `${this.name}: "${this.message}"`
// }
const os = require('os')
const buf1 = Buffer.from('hello world')
console.log(Buffer.isEncoding(buf1, 'utf8'))



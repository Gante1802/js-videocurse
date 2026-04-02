const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  //Solution 1 -- small local projects
  //fs.readFile("test-file.txt", (err, data) => {
  //  if (err) console.log(err);
  //res.end(data);
  //});
  //Solution 2 --Streams
  // const readeble = fs.createReadStream('test-file.txt')
  // readeble.on('data', (chunk) => {
  //   res.write(chunk)
  // })
  // readeble.on('end', () => {
  //   res.end()
  // })
  // readeble.on('error', (err) => {
  //   console.log(err)
  //   res.statusCode = 500
  //   res.end('file not found')
  // })

  //Solution 3 -- Pipe Operator

  const readable = fs.createReadStream('test-file.txt')
  readable.pipe(res)
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...')
})

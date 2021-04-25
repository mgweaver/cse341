const http = require('http')

let server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Prove01</title></head>')
    res.write('<body><h1>Wassup homie welcome to assignment 1</h1></body>')
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
    res.write('<html>')
    return res.end()
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Prove01</title></head>')
    res.write('<body><ui><li>User 1</li><li>User 2</li></ui></body>')
    res.write('<html>')
  }
  if (url === '/create-user') {
    const body = []
    req.on('data', chunk => {
      body.push(chunk)
      
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody.split('=')[1])
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
});

server.listen(5000);
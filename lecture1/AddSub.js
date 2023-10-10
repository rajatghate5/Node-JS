const http = require("http")
const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  let a = 20
  let b = 10
  let add = a + b
  let sub = a - b
  res.setHeader("Content-Type", "text/html")
  res.end(`<p>The addition is ${add} and Subtraction is ${sub}</p>`)
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
});

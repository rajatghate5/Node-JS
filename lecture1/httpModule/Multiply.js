const http = require("http");
const url = require("url");
const host = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const q = url.parse(req.url, true);
  const valObj = q.query;
  const { num1, num2 } = valObj;
  const result = parseInt(num1) * parseInt(num2);
  res.setHeader('Content-type', 'text/html')
  res.write(`<h2>The Multiplication Result is ${result}</h2>`);
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

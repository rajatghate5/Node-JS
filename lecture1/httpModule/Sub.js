const http = require("http");
const url = require("url");
const host = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const q = url.parse(req.url, true);
  const valObj = q.query;
  const { num1, num2 } = valObj;
  const result = parseInt(num1) - parseInt(num2);
  res.write(`<h1> The Subtraction is ${result} </h1>`);
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

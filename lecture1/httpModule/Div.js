const http = require("http");
const url = require("url");
const host = "127.0.0.1";
const port = 3004;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const q = url.parse(req.url, true);
  const obj = q.query;
  const { num1, num2 } = obj;
  const result = parseInt(num1) / parseInt(num2);
  res.write(`<h1> The result of division is ${result} </h1>`);
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

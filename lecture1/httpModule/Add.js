const url = require("url");
const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let q = url.parse(req.url, true);
  let obj = q.query;
  const { num1, num2 } = obj;
  let result = parseInt(num1) + parseInt(num2);
  res.write(`<h1>The Result is ${result}</h2>`);
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

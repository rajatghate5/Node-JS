const url = require("url");
const http = require("http");
const host = "127.0.0.1";
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let q = url.parse(req.url, true);
  let obj = q.query;
  const { p, r, t } = obj;
  let result = (parseInt(p) + parseInt(r) + parseInt(t)) / 100;
  res.write(`<h1>The Simple Interest is ${result}</h1>`);
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

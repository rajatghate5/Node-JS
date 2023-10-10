const http = require("http");
const url = require("url");
const host = "127.0.0.1";
const port = 3005;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const q = url.parse(req.url, true);
  const obj = q.query;
  const { num1 } = obj;

  let result = "Prime";
  if ((num1 > 2 && num1 % 2 == 0) || num1 < 2) {
    result = "Not Prime";
  } else {
    for (let i = 2; i < num1; i++) {
      if (num1 % i == 0) {
        result = "Not Prime";
        break;
      }
    }
  }
  res.write(`<h1> The Number is ${result} </h1>`);
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

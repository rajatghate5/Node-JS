const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let p = 50000;
  let r = 2;
  let t = 5;
  let si = (p * r * t) / 100;
  res.setHeader("Content-type", "text/html");
  res.end(`<p>The SI is ${si}</p>`);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

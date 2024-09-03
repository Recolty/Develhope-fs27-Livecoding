const http = require("http");
const heroes = require("./people.js");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("Request recieved");
  res.setHeader("Content-Type", "application/json");

  const parsedUrl = url.parse(req.url, true);

  if (req.method === "GET") {
    if (parsedUrl.pathname === "/heroes") {
      res.statusCode = 200;
      res.end(JSON.stringify(heroes));
    } else if (parsedUrl.pathname.startsWith("/heroes/")) {
      const id = Number(parsedUrl.pathname.split("/")[2]);

      if (isNaN(id)) {
        res.statusCode = 400;
        res.end(JSON.stringify({ msg: "Wrong request" }));
      } else {
        const foundHero = heroes.find((hero) => hero.id === id);

        if (foundHero) {
          res.statusCode = 200;
          res.end(JSON.stringify(foundHero));
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ msg: "Hero not found" }));
        }
      }
    } else {
      res.statusCode = 404
      res.end(JSON.stringify({msg: "Page not found"}))
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ msg: "Method not supported" }));
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server opened at port ${port}`);
});

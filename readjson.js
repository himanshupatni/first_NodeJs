var http = require("http");
var staff = require("./public/data/staff.json");

var server = http.createServer(function(req, res) {
  if (req.url === "/") {
    console.log(true);

    res.writeHead(200, {
      "Content-Type": "text/json"
    });
    res.end(JSON.stringify(staff));
  } else if (req.url === "/javascript") {
    var data = staff.filter(function(item) {
      return item.languages === "javascript";
    });
    res.writeHead(200, {
      "Content-Type": "text/json"
    });
    res.end(JSON.stringify(data));
  } else if (req.url === "/.net") {
    var data = staff.filter(function(item) {
      return item.languages === ".net";
    });
    res.writeHead(200, {
      "Content-Type": "text/json"
    });
    res.end(JSON.stringify(data));
  }
  else {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end("No Record Found");
  }
});
server.listen(3131, () => {
  console.log("listening on server ");
});

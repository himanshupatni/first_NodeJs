var http = require("http");
var fs = require("fs");
var queryString = require("querystring");
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/college";
http.createServer((req, res) => {
    if (req.url === "/form") {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    }
    if (req.method === "POST") {
      var data = "";
      req.on("data", function(chunk) {
        data += chunk;

      });
      req.on("end", function(chunk) {
        mongoClient.connect(url, function(err, db) {

          if (err) throw err;
          var q = queryString.parse(data);

          const myDb = db.db("students");
          // console.log(myDb);

          myDb.collection("students").insertOne(q, function(err, res) {
            if (err) throw err;
            else console.log("Data inserted Success");
            db.close();
          });
        });
      });
    }
  })
  .listen(3334);

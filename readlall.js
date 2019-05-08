var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/college";

http.createServer((req, res) => {

  MongoClient.connect(url, (err, db) => {

    if (err) throw err;
    var myDb = db.db("students");
    myDb.collection("students").find({}).toArray((err, result) => {
      if(err) throw err;
      res.writeHead(200, {"Content-Type": "text/html"});

      res.end(JSON.stringify(result));
    });

  });

}).listen(3322);
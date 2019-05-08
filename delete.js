var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/college";

http.createServer((req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var myDb = db.db("students");
    myDb.collection('students').deleteOne({
      "demail": "amit@gmail.com"
    }, (err, result) => {
      if (err) throw err;
      console.log("Record Deleted");
      db.close();
    });
  });
 }).listen(3329);
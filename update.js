var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/college";

http.createServer((req, res) => {

  MongoClient.connect(url, (err, db) => {

    if (err) throw err;
    var myDb = db.db("students");
    var oldData = { demail: "abcd" };
    var newData= { $set : {dname : "Amit Kumar",demail:"amit@gmail.com",daddress:"delhi" } };
    myDb.collection('students').updateOne(oldData, newData,(err, result) => {
      if(err) throw err;
      console.log("Record Updated");
      db.close();
    });

  });

}).listen(3328);
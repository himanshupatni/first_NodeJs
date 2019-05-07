var http= require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  if(req.method === "GET"){
console.log(req.method);

    res.writeHead(200,{"Content-Type": "text/html"});
fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
  }
  else if (req.method === "POST"){
console.log(req.method);
    
    var data="";
req.on("data", function(chunk){
  data += chunk;
});
req.on("end", function(){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end(`${data}`);
});

  }
});
server.listen(2000);
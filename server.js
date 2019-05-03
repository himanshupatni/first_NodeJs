var http= require('http');
var fs= require('fs');
var path=require('path');
 http.createServer((req,res)=>{
   if(req.url){

    fs.readFile('./public/index.html',"UTF-8",(err,html)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(html);
    
    });
   }
   if(req.url.match('\.css$')){
     var cssPath=path.join(__dirname,"public",req.url);
     var fileStream=fs.createReadStream(cssPath,"UTF-8");
     res.writeHead(200,{"Content-Type": "text/css"});
     fileStream.pipe(res);  
     console.log(cssPath);
     

   }
    if(req.url.match('\.jpg$')){
    var jpgPath =path.join(__dirname,"public",req.url);
    var imageStream =fs.createReadStream(jpgPath);
    res.writeHead(200,{"Content-Type": "image/jpg"});
    imageStream.pipe(res);  
    console.log(cssPath);
    

  }

console.log(req.url);


  // res.writeHead(200, {'Content-Type': 'text/html'});
// res.write("hello I'm server " + "I'm what, i am url " + "\"" + req.url + "\" " );
 
 }).listen(3051);
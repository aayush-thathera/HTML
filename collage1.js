var http = require('http');
var url= require('url');

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    var q=url.parse(req.url,true).query;
    var text=q.year+" "+q.month;
    res.end(text);    
}).listen(8000);

const fs=require("fs")
fs.writeFileSync("./hello.txt","this is node js section")

//http://localhost:8000/?year=2024&month=December
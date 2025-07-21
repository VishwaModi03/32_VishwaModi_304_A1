const { Console } = require('console');
const http=require('http');
const static=require('node-static');

const fileServer=new static.Server('./files');

const server=http.createServer(function(request,response){
    request.addListener('end',function(){
        fileServer.serve(request,response);
    }).resume();
});

server.listen(8000);
console.log("Server is running at http://localhost:8000");
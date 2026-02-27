const http = require('http');
let counter = 0;

const server = http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html"});
    counter++;
    response.write("<h1> Counter: "+ counter + " </h1>");
    response.end();
});

server.listen(8080);

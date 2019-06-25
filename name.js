const http = require('http'); 
const server = http.createServer((request, response) => { 
    console.log("HTTP works!");
    response.writeHead(404, {'Content-Type':'text/html'});
    response.write('<h1>Hello</h1>');
    response.end();
}).listen(8080);
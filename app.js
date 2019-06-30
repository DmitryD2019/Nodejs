const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    fs.readFile('header.html', 'utf-8', (err, data)=>{
        if(err) {
            res.statusCode = 404;
            res.end();
        } else {
            res.writeHead(200, {
               'Content-Type':'text/html' 
            });
            res.write(data);
            fs.readFile('body.html', 'utf-8', (err, data)=>{
                if(err) {
                    res.statusCode = 404;
                    res.end();
                } else {
                    res.end(data);
                    fs.readFile('footer.html', 'utf-8', (err, data)=>{
                        if(err) {
                            res.statusCode = 404;
                            res.end();
                        } else {
                            res.end(data);
                        }
                    });
                }
            });
        }
    });
}).listen(80);
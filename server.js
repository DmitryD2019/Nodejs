let http = require('http'); 
let fs = require('fs'); 
http.createServer((request, response) => {  
    let pathname = 'site/index.html'; 
    console.log("Request: " + request.url);  
    fs.readFile(pathname, 'utf8', (err, data) => {   
        if (err) {    
            console.log('Could not find or open file for reading\n'); 
            response.statusCode = 404;    
            response.end();   
        } else { 
                console.log(`The file ${pathname} is read and sent to the client\n`);   
                response.writeHead(200, {'Content-Type':'text/html'});    
                response.end(data);   
            }    
        }); 
    }).listen(80, ()=>{  
        console.log("HTTP server works in 80 port!\n"); 
    }); 

    let path = require('path'); 
    let mimeTypes = {  
        '.js': 'text/javascript',  
        '.html': 'text/html', 
        '.css': 'text/css',  
        '.jpg': 'image/jpeg',  
        '.gif': 'image/gif' 
    }; 

    fs.readFile(pathname, 'utf8', (err, data) => { 
        if (err) {
            console.log('Could not find or open file for reading\n');   
            response.statusCode = 404;   
            response.end();  
        } else {   
            console.log(`The file ${pathname} is read and sent to the client\n`);   
            response.writeHead(200, { 
                    'Content-Type': mimeTypes[path.extname(pathname)] 
            });   
            response.end(data);  
        }   
    }); 
 

    http.createServer((request, response) => {  
        let pathname, extname, mimeType;   
        console.log("Request: " + request.url);   
        if (request.url === '/')  
            pathname = 'site/index.html'; 
        else   
            pathname = 'site' + request.url;  
            extname = path.extname(pathname);  
            mimeType = mimeTypes[extname]; 

        if (extname === ".jpg" || extname === ".gif") {   
            try {    
                let img = fs.readFileSync(pathname);    
                console.log(`The file ${pathname} is read and sent to the client\n`);    
                response.writeHead(200, {'Content-Type': mimeType});    
                response.end(img);
            } catch (e) {    
                console.log('Could not find or open file for reading\n');    
                response.statusCode = 404;    
                response.end();   
            }  
        } else {    
            fs.readFile(pathname, 'utf8', (err, data) => {    
                if (err) { 
                    console.log('Could not find or open file for reading\n');     
                    response.statusCode = 404;     
                    response.end();    
                } else { 
                    console.log(`The file ${pathname} is read and sent to the client\n`);     
                    response.writeHead(200, {'Content-Type': mimeType});     
                    response.end(data);    
                }     
            });  
        } 
    }).listen(80, ()=>{  
        console.log("HTTP server works in 80 port!\n"); 
    }); 
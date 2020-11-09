var http = require('http'),
    open = require('open'),
    fs = require('fs'),
    express = require('express'),
    app = express(),
    server;

server = http.createServer(app.use(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', function(error,data){
        if (error) {
            res.writeHead(404);
            res.write("Error: File not Found");
        } else {
            res.write(data);
        }
        res.end();
    });
}));

server.listen(3000, function(error){
    if (error){
        console.log("Error occured", error);
    } else {
        console.log("Server listening on port 3000...");
        open('http://localhost:3000');
    }
});
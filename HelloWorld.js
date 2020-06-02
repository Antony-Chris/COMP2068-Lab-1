'use strict';

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end('Hello Javascript World');
}).listen(3000);

    console.log("Server listening on the port of 3000");



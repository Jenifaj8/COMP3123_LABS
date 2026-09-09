/*
Purpose
We'll use Node to Create a Server and then listen on that server
for any incoming requests. Then return a response.

*/

var http = require("http")

http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    })
    response.end("The server is now running successfully and listening")
}).listen(8088)

// Optional Homework: try another port number
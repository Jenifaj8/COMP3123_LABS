/*
Purpose: Create multiple server paths to access

/root
/users
/userlist
/name

*/

let http = require("http")  // Hypertext Transfer Protocol
let fs = require("fs")
let users = require("./data.js")
const { stringify } = require("querystring")

const PORT = 8088

// Create the server and the multiple paths below
var server = http.createServer((request, response) => {
    if(request.url == "/"){
        response.write("<h1>NodeJS Web Server at the root</h1>")
        response.write("<p>Welcome to the root path at the server</p>")
        response.end()
    }
    if(request.url == "/users"){
        // Convert from JSON obj to JSON string
        let data = JSON.stringify(users.users.id) // Must use the file as a namespace 
        // object and then go deeper into it by using the dot operator to access the object
        // from that namespace object
        response.write(data)
        response.end()

    }
    if(request.url == "/name"){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write("<article>Jenifa Joseph</article>")
        response.end()
    }
    if(request.url == "/userlist"){
        fs.readFile(__dirname + "/employees.json", "utf-8", (error, data) => {
            response.write(data)
            response.end()
        })
    }
})

server.listen(PORT)
console.log("Server started at port number : ${PORT}")


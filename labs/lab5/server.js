/* 
Use Express routes to serve the page
app.use()

*/

const express = require("express")
const fs = require("fs")
var dateFormat = require("dateformat")

var books = require("./Books.js") // This will allow us to access 
// all of the exports from Books.js
var computers = require("./Computers.js")

const app = express()
const router = express.Router()

// Helper functions ---------------------------------------------
let writeData = (data) => {
    data += "\r\n"
    fs.appendFile("server_log.txt", data, function (error){
        if(error){
            throw error
        }
        console.log("Log saved!") 
    })
}

// Callback for the server
let logger = (request, response, next) => {
    const todays = dateFormat(Date(), "dddd, mmmm ds, yyyy, h:MM:ss TT")
    let data = `[ ${todays} ${request.originalUrl} ]`
    writeData(data)
    next()
}

// --------------------------------------------------------------

app.use(logger)

let booksLogger = (request, response, next) => {
    console.log("Books logger called")
    next()
}

app.use("/books", booksLogger, books)
app.use("/books/computers", computers)

app.listen(8080)
console.log("Web server is listening at port: " + 8080)
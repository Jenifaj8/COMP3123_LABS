/*
Set up the path for the root /
Set up the middleware for JSON and URLencoding
Set up the path for the NotesRoutes

*/
require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const notesRoutes = require("./routes/notesRoutes.js")

const PORT = process.env.PORT || 8081
const DB_URL = process.env.MONGODB_URI

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set up the route to the root / path
app.get("/", (request, response) => {
    response.send("<h1> Welcome to the root path of the server")
})

// Set up our route to routes set up in the routes/NotesRoutes.js file
app.use("/api", notesRoutes)

// Set up the connection to the MongoDB using our connection string and mongoose framework
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Successfully connected to the MongoDB Atlas server")
        app.listen(PORT, () => {
            console.log(`Server listening at port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
        console.log("Could not connect to the MongoDB server")
        process.exit(1)
    })
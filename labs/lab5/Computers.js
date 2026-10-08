/*
This file will be used to set up the routes for the GET param path

*/

const express = require("express")
const router = express.Router()

router.route("/java")
    .post((request, response) => {
        response.send("Used POST method - /books/computers/java")
    })

router.route("/python")
    .put((request, response) => {
        response.send("Use PUT method - /books/computers/python")
    })

router.route("/game-dev")
    .get((request, response) => {
        response.send("Used GET method - /books/computers/game-dev")
    })  

module.exports = router
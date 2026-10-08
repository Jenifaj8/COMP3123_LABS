/*
Setting up all the routes for tje /books path

*/

const express = require("express")
const router = express.Router()

router.route("/")
    .get((request, response) => {
        response.send("GET method was used - Get a random book")
    })

module.exports = router
/*
Purpose:
Define the table in JSON format for Mongo & Mongoose

*/

const mongoose = require("mongoose")
const NotesSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    dateAdded: {
        type: String,
        required: true
    },
    dateUpdated: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("NotesSchema", NotesSchema)
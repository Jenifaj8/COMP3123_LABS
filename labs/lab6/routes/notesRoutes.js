/*
Purpose: 
Set up all of the routes/paths for our server

*/

const express = require("express")
const router = express.Router()
const NotesModel = require("../models/NotesModel.js")

// Fill in the routes and methods below from the lab instructions

// In URL you will see localhost:8081/api/notes
router.post("/notes", async (request, response) => {
    // Validation of the POST body
    if(!request.body.content){
        return response.status(400).send({
            message: "Note content in the POST body cannot be left empty"
        })
    }

    // If the content of the body existed 
    try {
        const note = new NotesModel({
            noteTitle: request.body.content.noteTitle,
            noteDescription: request.body.content.noteDescription,
            priority: request.body.content.priority,
            dateAdded: request.body.content.dateAdded,
            dateUpdated: request.body.content.dateUpdated
        })

        const savedNote = await note.save()
        response.status(201).send()
    } catch (error){
        response.status(500).send({
            message: error.message || "Some error occured while creating the note from the database"
        })
        
    }

})


// Required homework: complete the remaining GET, PUT and DELETE method routes here

// GET - Retrieve all notes from the database
router.get("/notes", async (request, response) => {
    try {
        const notes = await NotesModel.find()
        response.status(200).send(notes)
    } catch (error) {
        response.status(500).send({
            message: error.message || "Some error occurred while retrieving notes from the database"
        })
    }
})

// PUT - Update an existing note by ID
router.put("/notes/:noteId", async (request, response) => {
    // Validation of the PUT body
    if (!request.body.content) {
        return response.status(400).send({
            message: "Note content in the PUT body cannot be left empty"
        })
    }

    try {
        const updatedNote = await NotesModel.findByIdAndUpdate(
            request.params.noteId,
            {
                noteTitle: request.body.content.noteTitle,
                noteDescription: request.body.content.noteDescription,
                priority: request.body.content.priority,
                dateAdded: request.body.content.dateAdded,
                dateUpdated: request.body.content.dateUpdated
            },
            { new: true, runValidators: true }
        )

        if (!updatedNote) {
            return response.status(404).send({
                message: "Note not found"
            })
        }

        response.status(200).send(updatedNote)

    } catch (error) {
        response.status(500).send({
            message: error.message || "Some error occurred while updating the note"
        })
    }
})

// DELETE - Delete an existing note by ID
router.delete("/notes/:noteId", async (request, response) => {
    try {
        const deletedNote = await NotesModel.findByIdAndDelete(
            request.params.noteId
        )

        if (!deletedNote) {
            return response.status(404).send({
                message: "Note not found"
            })
        }

        response.status(200).send({
            message: "Note deleted successfully"
        })

    } catch (error) {
        response.status(500).send({
            message: error.message || "Some error occurred while deleting the note"
        })
    }
})

module.exports = router
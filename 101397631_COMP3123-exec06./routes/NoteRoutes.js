const express = require('express');
const noteModel = require('../models/NotesModel.js');
const router = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', (req, res) => {
    

    // Validate request
    if (!req.body.noteTitle || !req.body.noteDescription) {
        console.error("Validation Error: Missing required fields");
        return res.status(400).send({
            message: "Note title and description cannot be empty"
        });
    }

    // Create a new Note
    const note = new noteModel({
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority || 'LOW',  
        dateAdded: new Date()
    });

    // Save the note in the database
    note.save()
        .then(data => {
            console.log("Note saved successfully:", data);  // Log success
            res.status(201).send(data);
        })
        .catch(err => {
            console.error("Error saving note:", err);  // Log error details
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
});





//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', (req, res) => {
    noteModel.find()
    .then(notes => {
        res.status(200).send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving notes."
        });
    });
});


//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', (req, res) => {
    noteModel.findById(req.params.noteId)
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send(note);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', (req, res) => {
    if (!req.body.noteTitle || !req.body.noteDescription || !req.body.priority) {
        return res.status(400).send({
            message: "Note title, description, and priority cannot be empty"
        });
    }

    noteModel.findByIdAndUpdate(req.params.noteId, {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateUpdated: Date.now()
    }, { new: true })
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send(note);
    }).catch(err => {
        res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
});


//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
// Delete a Note by ID
router.delete('/notes/:noteId', (req, res) => {
    noteModel.findByIdAndDelete(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
            }
            res.status(200).send({ message: "Note deleted successfully!" });
        })
        .catch(err => res.status(500).send({ message: err.message }));
});


module.exports = router;

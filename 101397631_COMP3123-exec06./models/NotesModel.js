const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated



// Note Schema
const NoteSchema = new mongoose.Schema({
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
        enum: ['HIGH', 'MEDIUM', 'LOW'],
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date
    }
});

module.exports = mongoose.model('Note', NoteSchema);


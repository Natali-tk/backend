const getNotes = require('./getNotes')
const getNote = require('./getNoteById')
const addNote = require('./addNote')
const deleteNote = require('./deleteNote')
const updateNote = require('./updateNote')

module.exports = {
    getNotes,
    getNote,
    addNote,
    deleteNote,
    updateNote,
}
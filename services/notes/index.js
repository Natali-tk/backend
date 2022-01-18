const getNotes = require('./getNotes')
const getNote = require('./getNoteById')
const addNote = require('./addNote')
const deleteNote = require('./deleteNote')
const updateNote = require('./updateNote')
const getStats = require('./getStats')

module.exports = {
    getNotes,
    getNote,
    addNote,
    deleteNote,
    updateNote,
    getStats,
}
const listNotes = require("./listNotes");

const getNoteById = async (noteId) => {
    const notes = await listNotes();
    const note = notes.find(
      (item) => item.id.toString() === noteId.toString()
    );
    if (!note) {
      return null;
    }
    return note;
  };
  module.exports = getNoteById;
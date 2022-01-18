const listNotes = require("./listNotes");
const updateNotes = require("./updateNotes");

const removeNote = async (noteId) => {
  const notes = await listNotes();
  const idx =notes.findIndex((item) => item.id === noteId);
  if (idx === -1) {
    return null;
  }
  const newNotes = notes.filter((item) => item.id !== noteId);
  await updateNotes(newNotes);
  return noteId;
};

module.exports = removeNote;
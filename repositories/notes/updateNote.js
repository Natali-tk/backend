const listNotes = require("./listNotes");
const updateNotes = require("./updateNotes");

const updateNote = async (noteId, body) => {
  const notes = await listNotes();
  const idx = notes.findIndex((item) => item.id === noteId);
  if (idx === -1) {
    return null;
  }
  const updateNote = { ...notes[idx], ...body };
  notes[idx] = updateNote;
  await updateNotes(notes);
  return updateNote;
};
module.exports = updateNote;